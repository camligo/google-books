import styles from "./Loader.module.scss";
import { useContext } from "react";
import { ColorThemeContext } from "../../context/ColorThemeContextProvider/ColorThemeContextProvider";

const Loader = () => {
  const { darkMode } = useContext(ColorThemeContext);

  const classes = `${styles.Loader} ${
    darkMode ? styles.Loader_dark : styles.Loader_light
  }`

  return (
    <div className={classes}>
      <span className={styles.LoaderElement}></span>
      <span className={styles.LoaderElement}></span>
      <span className={styles.LoaderElement}></span>
    </div>
  )
}

export default Loader;
