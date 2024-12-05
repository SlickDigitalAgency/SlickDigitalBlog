// AboutLeftside.js
import React from "react";
import { motion } from "framer-motion";

const AboutLeftside = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r  dark:text-white ">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6">
            About Slick Digital Blog
          </h2>
          <p className="text-lg mb-4 leading-relaxed text-slate-800 dark:text-slate-400 text-justify">
            Welcome to Slick Digital Blog! We’re passionate about exploring the
            digital landscape and bringing the latest insights on web
            development, digital marketing, and emerging tech trends to our
            readers.
          </p>
          <p className="text-md text-slate-800 dark:text-slate-400 text-justify">
            Founded by a group of tech enthusiasts, Slick Digital is dedicated
            to helping professionals and beginners alike navigate the
            ever-evolving digital world. Whether it’s front-end frameworks, SEO
            strategies, or design inspiration, our blog offers a space for
            everyone eager to grow in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLeftside;
