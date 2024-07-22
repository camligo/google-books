import { shortenTitle, shortenAuthors } from "../../utils/utils";
import styles from "./BookCard.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider";

const BookCard = ({ book }) => {
  const { title, authors, imageLinks } = book.volumeInfo;
  const defaultImage = "https://www.hachettebookgroup.com/wp-content/uploads/2017/07/missingbook.png";
  const highResImage = imageLinks ? imageLinks.thumbnail.replace("&zoom=1", "&zoom=3") : defaultImage;
  const maxTitleLength = 24;
  const { darkMode } = useContext(ColorThemeContext);

  const classes = `${styles.BookCard} ${
    darkMode ? styles.BookCard_dark : styles.BookCard_light
  }`;

  return (
    <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
      <article className={classes}>
        <div className={styles.BookImgContainer}>
          <img
            className={styles.BookImg}
            src={highResImage}
            alt={`${title} cover`}
          />
        </div>
        <div className={styles.BookInfo}>
          <h3>{shortenTitle(title, maxTitleLength)}</h3>
          {authors && <h5>{shortenAuthors(authors)}</h5>}
        </div>
      </article>
    </Link>
  )
}

export default BookCard;
