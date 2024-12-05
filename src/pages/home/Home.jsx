import React from "react";
import {
  HomeHero,
  AboutUs,
  OurBlogs,
  Testimonials,
  CallToAction,
} from "../../components";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutUs />
      <OurBlogs count={6} blogtitle="Recent Blogs" showPagination={false} />
      {/* Pass count to display 6 blogs */}
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
