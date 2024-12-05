import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 md:p-12 flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
      {/* Left Column */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <LeftAbout />
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <RightAbout />
      </motion.div>
    </div>
  );
};

export default AboutUs;
