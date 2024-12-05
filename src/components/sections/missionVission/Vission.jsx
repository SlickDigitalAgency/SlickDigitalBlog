import React from "react";
import { motion } from "framer-motion";
import { ourVissionimg } from "../../../assets"; // Ensure the path is correct
import SocialIcons from "../../common/socialIcons/SocialIcons";

const Vision = () => {
  return (
    <section className="md:mx-12 mx-4 py-16 dark:bg-slate-900 bg-slate-400 rounded-3xl dark:text-slate-100 text-slate-900 px-6 md:px-12 lg:px-24 flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Column */}
        <motion.div
          className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex flex-col items-center lg:items-start" // Center text on smaller screens
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl font-bold mb-4 text-center lg:text-left" // Center heading text
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Vision
          </motion.h2>

          {/* Vision Statement */}
          <motion.p
            className="text-lg mb-12 leading-relaxed text-justify " // Center paragraph text
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Our vision is to be at the forefront of technological and social
            advancements, offering cutting-edge products and services that are
            both sustainable and customer-focused. What sets us apart is our
            unwavering commitment to quality, innovation, and a deep
            understanding of our customers' needs. Our blog explores digital
            trends, providing insights that empower readers to stay ahead in a
            dynamic world.
          </motion.p>
          <SocialIcons />
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center" // Center image column
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img
            src={ourVissionimg}
            alt="Vision"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
