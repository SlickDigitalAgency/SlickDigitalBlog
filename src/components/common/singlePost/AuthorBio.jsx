import React from "react";

const AuthorBio = ({ authorPhoto, authorName, bio, links }) => {
  return (
    <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src={authorPhoto}
          alt="Author"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {authorName}
          </h3>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{bio}</p>
      <div className="flex space-x-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primaryHover"
          >
            <i className={link.iconClass}></i> {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AuthorBio;
