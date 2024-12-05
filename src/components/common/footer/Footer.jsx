// Footer.js
import React from "react";
import FooterAbout from "./FooterAbout";
import Legal from "./Legal";
import QuickLinks from "./QuickLinks";
import SocialIcons from "../socialIcons/SocialIcons";
import Copyright from "./Copyright";
const Footer = () => {
  return (
    <footer className="bg-slate-300 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between  space-y-8 md:space-y-0 md:space-x-12 lg:space-x-20">
          <FooterAbout />
          <QuickLinks />
          <Legal />
        </div>
        <div className="py-12">
          <SocialIcons />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
