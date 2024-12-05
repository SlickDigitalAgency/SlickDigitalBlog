import React from "react";

const CtaRight = () => {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-slate-900 bg-slate-300 dark:text-white text-slate-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4">
        Ready to Grow Your Business? Let's Talk!
      </h3>
      <p className="text-lg mb-6">
        Our team is here to help you create digital solutions that drive
        success. Contact us now to start your journey.
      </p>
      {/* Optional Contact Button */}
      <a
        href="mailto:contact@yourdomain.com" // Use your contact email or link to a contact page
        className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-200 transition duration-300"
      >
        Contact Us
      </a>
    </div>
  );
};

export default CtaRight;
