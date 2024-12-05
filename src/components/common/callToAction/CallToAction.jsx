import React from "react";
import { aboutImage } from "../../../assets"; // Ensure the correct image is imported
import RoundButton1 from "../../common/buttons/RoundButton1"; // Importing RoundButton1
import { motion } from "framer-motion"; // Importing framer-motion for animation

const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r ">
      <div className="container mx-auto text-center dark:bg-slate-900 bg-slate-300 dark:text-white text-slate-900 rounded-lg shadow-lg p-8 md:p-16">
        {/* Heading or intro text */}
        <motion.h2
          className="text-3xl font-bold mb-8 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Take Action Now
        </motion.h2>

        {/* Two-column layout with responsiveness */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left Column with Image */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={aboutImage} // Ensure to use the correct image source
              alt="About Us" // Alt text for better accessibility
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Right Column with Text Content */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-800 p-8 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900 dark:text-white">
                Ready to Grow Your Business? Let's Talk!
              </h3>
              <p className="text-lg mb-6 text-slate-600 dark:text-slate-300">
                Our team is here to help you create digital solutions that drive
                success. Contact us now to start your journey.
              </p>
              {/* Contact Button */}
              <RoundButton1 btnText="Contact Us" btnLink="/contact" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
