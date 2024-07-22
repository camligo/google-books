import { createContext, useState } from "react";

export const ColorThemeContext = createContext(null);

const ColorThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const providedValues = { darkMode, toggleDarkMode };
  return (
    <ColorThemeContext.Provider value={providedValues}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeContextProvider;
