import React from "react";

const BestArticles = ({ topArticles }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
        Top Articles
      </h3>
      <ul>
        {topArticles.map((article) => (
          <li key={article.id} className="flex items-center mb-4">
            <img
              src={article.featureImage}
              alt={article.title}
              className="w-12 h-12 mr-4 rounded-lg"
            />
            <a
              href={article.link}
              className="text-slate-900 dark:text-white hover:text-primary"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestArticles;
