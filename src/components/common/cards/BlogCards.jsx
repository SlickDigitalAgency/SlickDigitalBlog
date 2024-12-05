// BlogCards.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCards = ({ blogData }) => {
  const shortDescription = blogData.description.slice(0, 90);
  const shortTitle = blogData.title.slice(0, 30);

  return (
    <Link to={`/blog/${blogData.slug}`}>
      <motion.div
        className="dark:bg-slate-900 bg-slate-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={blogData.featureImage || "/path/to/fallback-image.jpg"}
          alt={blogData.title}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
          {shortTitle}
          {blogData.title.length > 30 && "..."}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {shortDescription}
          {blogData.description.length > 90 && "..."}
        </p>
      </motion.div>
    </Link>
  );
};

export default BlogCards;
