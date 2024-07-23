import { useState, useEffect, useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/bookService";
import { cleanDescription } from "../../utils/utils";
import Loader from "../../components/Loader/Loader";
import styles from "./BookPage.module.scss";


const BookPage = () => {
  const { id } = useParams();
  const { darkMode } = useContext(ColorThemeContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      const data = await getBookById(id);
      setBook(data);
    };

    getBook();
  }, [id]);

  if (!book) {
    return <div><Loader /></div>
  }

  const { title, subtitle, authors, imageLinks, publisher, publishedDate, description } = book.volumeInfo;
  const defaultImage = "https://www.hachettebookgroup.com/wp-content/uploads/2017/07/missingbook.png"
  const highResImage = imageLinks ? imageLinks.thumbnail.replace('&zoom=1', '&zoom=3') : defaultImage;


  const classes = `${styles.BookPage} ${
    darkMode ? styles.BookPage_dark : styles.BookPage_light
  }`;

  return (
    <div className={classes}>
      <img
        className={styles.BookImage}
        src={highResImage}
        alt={`${title} cover`}
      />
      <div className={styles.Titles}>
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
      <div className={styles.Info}>
        {authors && <h3>{authors.join(", ")}</h3>}
        <h5>{publisher}, {publishedDate}</h5>
        <p></p>
      </div>
      <p className={styles.Description}>
        {cleanDescription(description)}
      </p>
    </div>
  )
}

export default BookPage
