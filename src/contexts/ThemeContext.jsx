import { createContext, useState, useEffect } from "react";

// Create Context
export const ThemeContext = createContext();

// Create Provider
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Circle State
  const [circleActive, setCircleActive] = useState(false);

  // Dark mode
  function themeToggle() {
    // Avvia animazione cerchio
    setCircleActive(true);

    setTimeout(() => {
      const newTheme = darkMode ? "light" : "dark";
      setDarkMode(!darkMode);
      localStorage.setItem("theme", newTheme);

      if (newTheme === "dark") {
        document.body.classList.add("darkmode");
      } else {
        document.body.classList.remove("darkmode");
      }
    }, 500);

    setTimeout(() => {
      setCircleActive(false);
    }, 1000);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, themeToggle, circleActive }}>
      {children}
    </ThemeContext.Provider>
  );
}
