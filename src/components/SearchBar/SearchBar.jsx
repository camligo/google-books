import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider";
import styles from "./SearchBar.module.scss";
import searchIcon from "./search_icon.svg";
import { useState, useContext } from "react";

const SearchBar = ({ onSearch, clearOnSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { darkMode } = useContext(ColorThemeContext);

  const classes = `${styles.SearchBar} ${
    darkMode ? styles.SearchBar_dark : styles.SearchBar_light
  }`

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      if (clearOnSearch) {
        setSearchTerm("");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <img
        src={searchIcon}
        alt="Search icon"
        className={styles.SearchIcon}
      />
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter search term"
      />
      <button
        type="submit">
        <p>Search</p>
      </button>
    </form>
  )
}

export default SearchBar;
