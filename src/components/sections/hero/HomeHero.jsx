import React from "react";
import RoundButton1 from "../../common/buttons/RoundButton1";
import { motion } from "framer-motion";
import { homeHeroimg } from "../../../assets"; // Replace with your actual file name and extension

const HomeHero = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center bg-fixed bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${homeHeroimg})`, // Correct path using imported image
      }}
    >
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Main content - Heading, Paragraph, Button */}
      <div className="relative z-10 flex flex-col items-center text-white space-y-4 px-6">
        {/* Heading with slight animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to Slick Digital Blog
        </motion.h1>

        {/* Subtitle text */}
        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Discover the latest insights and expert tips on digital marketing, web
          development, and creative strategies to help you stay ahead.
        </motion.p>

        {/* Call-to-action button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <RoundButton1 btnText="Read Our Latest Articles" btnLink="/blog" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
