import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLeaf, FaUsers } from "react-icons/fa";

// Define the values
const values = [
  { icon: <FaLightbulb size={40} />, text: "Innovation" },
  { icon: <FaLeaf size={40} />, text: "Sustainability" },
  { icon: <FaUsers size={40} />, text: "Customer Focus" },
];

const Mission = () => {
  return (
    <section className="py-16  text-slate-950 dark:text-slate-200 px-6 md:px-12 lg:px-24">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Mission & Values
      </motion.h2>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Mission Statement Column */}
        <motion.div
          className="lg:w-1/2 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.h3
            className="text-3xl font-bold mb-6 text-slate-950 dark:text-slate-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="text-lg leading-relaxed text-justify text-slate-950 dark:text-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Our mission is to drive innovation and sustainability in all that we
            do. We strive to deliver exceptional value to our customers through
            our commitment to quality, creativity, and ethical practices. Our
            goal is to lead by example and make a positive impact on the world.
          </motion.p>
        </motion.div>

        {/* Values Cards Column */}
        <div className="lg:w-1/2">
          <div className="flex flex-wrap justify-center gap-8 ">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 bg-primaryHover  text-slate-200 dark:text-slate-950 dark:bg-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 1 }}
              >
                <div className="mb-4 text-black-100">{value.icon}</div>
                <p className="text-lg">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
