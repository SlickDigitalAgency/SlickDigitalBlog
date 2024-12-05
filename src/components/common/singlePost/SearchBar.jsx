import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search functionality here (for example, redirect to search results page or filter blog posts)
    console.log("Search for:", query);
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center"
      >
        {/* Search Input and Button Inside the Same Container */}
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for articles..."
            className="w-full p-3 border border-slate-300 dark:text-slate-950 rounded-full pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {/* Search Button positioned on the right inside the input */}
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 px-4 py-3 rounded-r-full bg-primary text-white hover:bg-primaryHover focus:outline-none focus:ring-primary"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
