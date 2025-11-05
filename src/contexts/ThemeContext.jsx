import { createContext, useState, useEffect } from "react";

// Create Context
export const ThemeContext = createContext();

// Create Provider
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Dark mode
  function themeToggle() {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
