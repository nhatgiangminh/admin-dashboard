import { useState, createContext } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => null,
});

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  const value = { darkMode, setDarkMode };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
