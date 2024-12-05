import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Importing the icons

const SocialSharing = () => {
  const shareUrls = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    twitter: "https://twitter.com/intent/tweet?url=",
    linkedin: "https://www.linkedin.com/shareArticle?url=",
  };

  const currentUrl = window.location.href; // Get the current URL for sharing

  return (
    <div className="flex space-x-4 mt-6">
      <a
        href={shareUrls.facebook + currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
      >
        <FaFacebookF size={16} /> {/* Smaller Facebook Icon */}
      </a>
      <a
        href={shareUrls.twitter + currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500"
      >
        <FaTwitter size={16} /> {/* Smaller Twitter Icon */}
      </a>
      <a
        href={shareUrls.linkedin + currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
      >
        <FaLinkedinIn size={16} /> {/* Smaller LinkedIn Icon */}
      </a>
    </div>
  );
};

export default SocialSharing;
