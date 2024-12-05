import React from "react";
import {
  OurBlogs,
  CallToAction,
  AboutHero,
  Vission,
  Mission,
} from "../../components";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Mission />
      <Vission />
      <OurBlogs count={3} blogTitle="Recent Blogs" showPagination={false} />
      <CallToAction />
    </div>
  );
};

export default About;
