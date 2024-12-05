/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Ensure this is set to "class"
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#df0c4b",
        primaryHover: "#830829", // Blue color (example primary color)
        dark: "#020617", // Lighter blue (example secondary color)

        light: "#ffffff", // Green color (example accent color)
      },
    },
  },
  plugins: [],
};
