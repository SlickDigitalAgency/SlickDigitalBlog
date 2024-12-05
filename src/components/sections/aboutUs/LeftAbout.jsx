import React from "react";
import RoundButton2 from "../../common/buttons/RoundButton2";
import { motion } from "framer-motion";

const LeftAbout = () => {
  return (
    <motion.div
      className="p-6 bg-slate-200 dark:bg-slate-900 rounded-lg shadow-lg flex flex-col items-start space-y-4"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title and Subtitle */}
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
        Muhammad Saad Satti
      </h2>
      <h3 className="text-lg font-medium text-slate-600 dark:text-slate-400">
        IT Professional and Digital Solutions Expert
      </h3>

      {/* Description */}
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        Muhammad Saad Satti, founder of <strong>SLICK DIGITAL AGENCY</strong>,
        is an experienced IT professional offering global-standard digital
        solutions in software development, SEO, and digital marketing. His
        expertise transforms ideas into impactful digital experiences for
        business success.
      </p>

      {/* Button */}
      <RoundButton2 btnText="Read More" btnLink="/about" />
    </motion.div>
  );
};

export default LeftAbout;
