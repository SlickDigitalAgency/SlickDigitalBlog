import React from "react";
import { motion } from "framer-motion";
import socialIconsData from "../../../data/SocialIconsData";

const SocialIcons = () => {
  return (
    <div className="py-5">
      <div className="container mx-auto flex justify-center space-x-6">
        {" "}
        {/* Adjusted gap here */}
        {socialIconsData.map((social) => (
          <motion.a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-2xl px-4 transition-colors duration-300"
            aria-label={social.name}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: social.id * 0.2 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
