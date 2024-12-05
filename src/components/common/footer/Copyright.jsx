import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const ownerName = "Slick Digital Agency"; // Replace with your name or organization
  const websiteUrl = "https://slickdigitalagency.com/"; // Website URL

  return (
    <div className="text-center py-4  dark:text-white">
      <p className="text-sm">
        &copy; {currentYear}{" "}
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {ownerName}
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;
