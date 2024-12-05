import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavbarData from "../../../data/NavbarData";
import ThemeToggle from "../theme/ThemeToggle";
import { MdClose } from "react-icons/md"; // Importing the close icon
import lightLogo from "/lightLogo.png"; // Update the import path based on your project structure
import darkLogo from "/darkLogo.png"; // Update the import path based on your project structure

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state

  // Check the initial dark mode state
  useEffect(() => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    setIsDarkMode(isDark); // Correcting the state update function to setIsDarkMode
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 md:px-12 md:py-4 bg-slate-100 dark:bg-slate-800 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={isDarkMode ? darkLogo : lightLogo} // Conditionally render the logo based on dark mode
          alt="Logo"
          className="h-12 w-auto mr-4" // Adjust size here
        />
      </div>

      {/* Navigation Links - Hidden on small screens */}
      <ul className="hidden md:flex gap-4">
        {NavbarData.map((item) => (
          <li key={item.id} className={item.cName}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative text-slate-700 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-300 transition duration-300 pb-2 ${
                  isActive
                    ? "underline underline-offset-8 decoration-2 decoration-slate-950 dark:decoration-slate-300"
                    : "hover:underline underline-offset-8 decoration-2 decoration-slate-500 dark:decoration-slate-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.title}
                  {isActive && (
                    <motion.span
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-slate-950 dark:bg-slate-300"
                      layoutId="underline"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Theme Toggle - Visible on all screens */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Mobile Menu Icon - Visible on small screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          className="focus:outline-none"
        >
          <div className="grid grid-cols-3 gap-1">
            {Array(9)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-slate-700 dark:bg-slate-300 rounded-full"
                ></div>
              ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu - Show when menuOpen is true */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
          {/* Close Icon - Centered */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close mobile menu" // Added accessible label
              className="focus:outline-none"
            >
              <MdClose className="text-slate-700 dark:text-slate-300 w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {NavbarData.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className="text-center text-slate-700 dark:text-slate-300 hover:text-slate-500 dark:hover:text-slate-300 transition duration-300"
                onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
              >
                <div className="flex justify-center items-center h-12 w-12 bg-slate-200 dark:bg-slate-700 rounded-lg">
                  <span>{item.icon}</span> {/* Display the icon */}
                </div>
                <span className="text-xs">{item.title}</span>
              </NavLink>
            ))}
            {/* Theme Toggle for Mobile Menu */}
            <div className="col-span-3 flex justify-center mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
