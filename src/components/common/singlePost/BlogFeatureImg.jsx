// BlogFeatureImg.js
import React from "react";
import { motion } from "framer-motion";

const BlogFeatureImg = ({ imageSrc }) => {
  return (
    <motion.div
      className="w-full  max-w-[980px] h-[620px] mx-auto bg-cover bg-center rounded-md overflow-hidden shadow-lg mb-12"
      style={{ backgroundImage: `url(${imageSrc})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    />
  );
};

export default BlogFeatureImg;
