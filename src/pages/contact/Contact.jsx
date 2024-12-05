import React from "react";
import { Contactus, OurBlogs } from "../../components";

const Contact = () => {
  return (
    <div>
      <Contactus />
      <OurBlogs count={3} blogTitle="Recent Blogs" showPagination={false} />
    </div>
  );
};

export default Contact;
