import React from "react";
import { aboutImage } from "../../../assets"; // Make sure the image path is correct
const CtaLeft = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={aboutImage} // Use the imported image here
        alt="About Us"
        className=" w-64 h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default CtaLeft;
