import { NavLink } from "react-router-dom";
import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider";
import styles from "./NavBar.module.scss";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import { useContext } from "react";

const NavBar = () => {
  const { darkMode } = useContext(ColorThemeContext);

  const classes = `${styles.NavBar} ${
    darkMode ? styles.NavBar_dark : styles.NavBar_light
  }`;

  return (
    <nav className={styles.NavContainer}>
      <NavLink to="/" className={classes}>
        BookFinder.
      </NavLink>
      <DarkModeSwitch />
    </nav>
  )
}

export default NavBar;
