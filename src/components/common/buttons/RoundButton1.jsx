import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import { motion } from "framer-motion"; // Importing framer-motion for animation

const RoundButton1 = ({ btnText, btnLink }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }} // Slightly reduce size on tap (click)
      transition={{ duration: 0.2 }} // Smooth transition for the tap effect
    >
      <Link
        to={btnLink} // Dynamically set the link using React Router's Link component
        className="inline-block px-12 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primaryHover focus:outline-none focus:ring-4 focus:ring-primary shadow-lg transition duration-300"
      >
        {btnText} {/* Dynamically set the button text */}
      </Link>
    </motion.div>
  );
};

export default RoundButton1;
