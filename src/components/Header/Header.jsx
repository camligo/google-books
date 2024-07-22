import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider";
import styles from "./Header.module.scss";
import { useContext } from "react";

const Header = () => {
  const { darkMode } = useContext(ColorThemeContext);
  const classes = `${styles.Header} ${
    darkMode ? styles.Header_dark : styles.Header.light
  }`

  return (
    <header className={classes}>
      <h1 className={styles.MainHeader}>Welcome to BookFinder!</h1>
      <h3 className={styles.SubHeader}>
        Enter a keyword to search for matching books in the Google Books database to discover your next read.
      </h3>
    </header>
  )
}

export default Header;
