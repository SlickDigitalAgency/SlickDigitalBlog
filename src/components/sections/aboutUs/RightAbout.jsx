import React from "react";
import { aboutImage } from "../../../assets"; // Make sure the image path is correct

const RightAbout = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={aboutImage} // Use the imported image here
        alt="About Us"
        className=" w-96 h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default RightAbout;
