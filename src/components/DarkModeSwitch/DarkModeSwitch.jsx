import { useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider";
import styles from './DarkModeSwitch.module.scss';
import sunIcon from "./sun-svgrepo-com.svg";
import moonIcon from './moon-stars-svgrepo-com.svg';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(ColorThemeContext);

  const classes = `${styles.BtnMode} ${
    darkMode ? styles.BtnMode_dark : styles.BtnMode_light
  }`
  return (
    <button className={classes} onClick={toggleDarkMode}>
      <img
        src={darkMode ? sunIcon : moonIcon}
        alt={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className={styles.Icon}
      />
    </button>
  )
}

export default DarkModeSwitch;
