import { useState } from "react";
// import ThemeContext from "./ThemeContext";
import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  function toggleTheme() {
    setThemeMode((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  }

  return <ThemeContext.Provider value={{ themeMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}
