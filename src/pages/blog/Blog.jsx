import React from "react";
import OurBlogs from "../../components/sections/ourBlog/OurBlogs";

const Blog = () => {
  const category = "all"; // Example category
  return (
    <div>
      <OurBlogs blogTitle="Our Latest Posts" category={category} />
    </div>
  );
};

export default Blog;
