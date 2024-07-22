import styles from "./LayoutWrapper.module.scss";
import { useContext } from "react";
import { ColorThemeContext } from "../context/ColorThemeContextProvider/ColorThemeContextProvider";

const LayoutWrapper = ({ children }) => {
  const { darkMode } = useContext(ColorThemeContext);

  const classes = `${styles.LayoutWrapper} ${
    darkMode ? styles.LayoutWrapper_dark : styles.LayoutWrapper_light
  }`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default LayoutWrapper
