// BlogTitleAndMetaInfo.js
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUser, FaTags } from "react-icons/fa";

const BlogTitleAndMetaInfo = ({ title, date, time, author, categories }) => {
  return (
    <motion.div
      className="mt-8 mb-6 text-left"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Blog Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h1>

      {/* Meta Info */}
      <div className="grid grid-cols-2 gap-4 sm:flex sm:space-x-6 sm:flex-wrap sm:space-y-0 mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-200">
        <div className="flex items-center space-x-2">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaClock />
          <span>{time}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUser />
          <span>{author}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap items-center mt-4 space-x-2 sm:space-x-4">
        {categories.map((category, index) => (
          <span
            key={index}
            className="flex items-center px-3 py-1 text-xs sm:text-sm text-white bg-primaryHover rounded-full mb-2"
          >
            <FaTags className="mr-1" /> {category}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogTitleAndMetaInfo;
