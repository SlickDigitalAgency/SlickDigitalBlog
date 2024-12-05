import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaTwitter, FaLinkedin } from "react-icons/fa"; // For social media icons

const BlogContent = ({ blog }) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-4 lg:px-16">
      {/* Blog Feature Image */}
      <div className="w-full">
        <img
          src={blog.featureImage}
          alt={blog.title}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Blog Title and Meta Information */}
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
          {blog.title}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {blog.date} | {blog.time}
        </p>
      </div>

      {/* Blog Content Section */}
      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Column - Blog Content */}
        <div className=" pr-2">
          <div className="text-lg text-slate-600 dark:text-slate-300">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-6"
            >
              {blog.content.introduction}
            </motion.p>

            {blog.content.mainContent.map((section, index) => (
              <div key={index} className="mb-6">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-2xl font-semibold text-slate-800 dark:text-slate-200"
                >
                  {section.heading}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-2 text-lg"
                >
                  {section.text}
                </motion.p>
              </div>
            ))}

            {/* Callout Box */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="dark:bg-slate-900 bg-slate-300  p-4 rounded-lg mt-6"
            >
              <blockquote className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                "{blog.content.callout.quote}"
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
