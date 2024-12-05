import React from "react";
import OurBlogs from "../../sections/ourBlog/OurBlogs";

const RelatedPosts = () => {
  const category = "Digital Marketing";
  return (
    <div>
      <OurBlogs
        count={3}
        blogTitle="You May Also Like"
        category={category}
        showPagination={false}
      />
    </div>
  );
};

export default RelatedPosts;
