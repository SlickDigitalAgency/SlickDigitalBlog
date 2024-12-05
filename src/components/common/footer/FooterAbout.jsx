// FooterAbout.js
import React from "react";
import { motion } from "framer-motion";

const FooterAbout = () => {
  return (
    <div className="footer-section flex flex-col items-center text-center md:text-left md:items-start space-y-4">
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold italic text-primaryHover dark:text-primary">
          Slick Digital Blog
        </h1>
      </motion.div>

      <motion.p
        className="text-slate-600 dark:text-slate-300 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We provide cutting-edge web and mobile app development, digital
        marketing, SEO services, and more. Powered by the best technologies like
        ViteJS, TailwindCSS, and Framer Motion for dynamic user experiences.
      </motion.p>
    </div>
  );
};

export default FooterAbout;
