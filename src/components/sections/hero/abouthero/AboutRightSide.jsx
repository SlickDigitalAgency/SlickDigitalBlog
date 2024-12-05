// AboutRightSide.js
import React from "react";
import { aboutImage } from "../../../../assets"; // Ensure this path is correct

const AboutRightSide = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <img
        src={aboutImage} // Replace with the correct path or URL
        alt="About Slick Digital Blog"
        className="w-full max-w-md h-auto object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default AboutRightSide;
