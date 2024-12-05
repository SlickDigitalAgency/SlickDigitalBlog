import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
const ThemeToggle = () => {
  // State to manage theme, default is system theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the initial theme based on local storage or system preference
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save theme in local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "light" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
