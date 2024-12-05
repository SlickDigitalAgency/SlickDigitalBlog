// Contact.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br dark:text-white py-16 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Details Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg">
            We would love to hear from you. Feel free to reach out using the
            details below.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Office Address Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-300 dark:bg-primary dark:hover:bg-primaryHover text-gray-800 dark:text-slate-100 p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 flex items-center space-x-4"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Birmingham,+United+Kingdom"
                )
              }
            >
              <FaMapMarkerAlt className="text-2xl text-indigo-600" />
              <div>
                <h4 className="text-xl font-semibold">Office Address</h4>
                <p>Birmingham, United Kingdom</p>
              </div>
            </motion.div>

            {/* WhatsApp Number Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-300 dark:bg-primary dark:hover:bg-primaryHover text-gray-800 dark:text-slate-100 p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 flex items-center space-x-4"
              onClick={() => window.open("https://wa.me/447393642179")}
            >
              <FaWhatsapp className="text-2xl text-green-500" />
              <div>
                <h4 className="text-xl font-semibold">WhatsApp Number</h4>
                <p>+44 (7393) 642179</p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-300 dark:bg-primary dark:hover:bg-primaryHover text-gray-800 dark:text-slate-100 p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 flex items-center space-x-4"
              onClick={() => (window.location.href = "tel:+447393642179")}
            >
              <FaPhone className="text-2xl text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <p>+44 (7393) 642179</p>
              </div>
            </motion.div>

            {/* Email Address Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-300 dark:bg-primary dark:hover:bg-primaryHover text-gray-800 dark:text-slate-100 p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 flex items-center space-x-4"
              onClick={() =>
                (window.location.href =
                  "mailto:info@blog.slickdigitalagency.com")
              }
            >
              <FaEnvelope className="text-2xl text-red-500" />
              <div>
                <h4 className="text-xl font-semibold">Email Address</h4>
                <p>info@blog.slickdigitalagency.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5758450245133!2d-74.0059416846065!3d40.71277597933112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzQ2LjAiTiA3NMKwMDAnMjMuNyJX!5e0!3m2!1sen!2sus!4v1610131234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
