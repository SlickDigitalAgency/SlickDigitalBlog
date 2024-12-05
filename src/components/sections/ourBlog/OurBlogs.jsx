import React, { useState } from "react";
import BlogData from "../../../data/BlogData"; // Importing the BlogData array
import BlogCards from "../../common/cards/BlogCards"; // Importing the BlogCards component

const OurBlogs = ({
  count = 4,
  blogTitle = "Recent Blogs",
  category = null,
  showPagination = true, // Default to true if not passed
}) => {
  // If category is 'all' or not provided, show all blogs
  const filteredBlogs =
    !category || category === "all"
      ? BlogData
      : BlogData.filter((blog) => blog.categories.includes(category));

  // Set initial page to 1
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / count);

  // Get the current slice of blogs for the current page
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * count,
    currentPage * count
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid page numbers
    setCurrentPage(page);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {blogTitle}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8">
          Stay updated with the latest in digital marketing, web development,
          and business growth.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Display current blogs based on pagination */}
          {currentBlogs.map((blog) => (
            <BlogCards key={blog.id} blogData={blog} />
          ))}
        </div>

        {/* Pagination Controls */}
        {showPagination && (
          <div className="mt-6 flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-primary hover:bg-primaryHover text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-lg font-medium text-slate-600 dark:text-slate-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-primary hover:bg-primaryHover text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurBlogs;
