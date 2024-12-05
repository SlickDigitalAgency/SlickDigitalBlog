// Legal.js
import React from "react";
import footerData from "../../../data/FooterData";

const Legal = () => {
  return (
    <div className="footer-section text-center">
      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
        Legal
      </h4>
      <ul className="space-y-3">
        {footerData.legal.map((item, index) => (
          <li key={index} className="group">
            <a
              href={item.link}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-300"
            >
              {item.name}
            </a>
            <div className="h-[2px] w-0 bg-slate-500 dark:bg-slate-300 transition-all duration-300 group-hover:w-full mx-auto"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legal;
