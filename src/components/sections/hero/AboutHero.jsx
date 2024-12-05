// AboutHero.js
import React from "react";
import AboutLeftside from "./abouthero/AboutLeftside";
import AboutRightSide from "./abouthero/AboutRightSide";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="container mx-auto p-6 md:p-16 flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
      {/* Left Column */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AboutLeftside />
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <AboutRightSide />
      </motion.div>
    </section>
  );
};

export default AboutHero;
