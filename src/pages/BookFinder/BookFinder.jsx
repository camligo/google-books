import { useState, useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getBooksBySearchTerm } from "../../services/bookService.js";
import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import BookCard from "../../components/BookCard/BookCard.jsx";
import styles from "./BookFinder.module.scss";

const BookFinder = () => {
  const [books, setBooks] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const navigate = useNavigate();

  const { darkMode } = useContext(ColorThemeContext);
  const classes = `${styles.BookFinder} ${
    darkMode ? styles.BookFinder_dark : styles.BookFinder_light
  }`;

  useEffect(() => {
    if (searchTerm) {
      const getBooks = async () => {
        const fetchedBooks = await getBooksBySearchTerm(searchTerm);
        setBooks(fetchedBooks);
        setSearched(true);
      };
      getBooks();
    }
  }, [searchTerm])

  const handleSearch = (term) => {
    navigate(`/books?search=${term}`)
  }

  return (
    <div className={classes}>
      <SearchBar onSearch={handleSearch} clearOnSearch />
      {searched && (
        <p className={styles.ResultsMessage}>
          Results matching <span className={styles.SearchPhrase}>{searchTerm}</span>:</p>
      )}
      <div>
        {searched && (
          books.length > 0 ? (
            <div className={styles.BookList}>
              {books.map((book) => (
                <BookCard key={book.id} book={book}/>
              ))}
            </div>
          ) : (
            <p className={styles.ResultsMessage}>
              No matching books found for {searchTerm}...
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default BookFinder;
