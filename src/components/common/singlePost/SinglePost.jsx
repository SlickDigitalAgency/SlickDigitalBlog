// SinglePost.js
import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "../../../data/BlogData"; // Ensure BlogData is imported correctly
import BlogFeatureImg from "./BlogFeatureImg";
import BlogTitleAndMetaInfo from "./BlogTitleAndMetaInfo";
import RelatedPosts from "./RelatedPosts";
import AuthorBio from "./AuthorBio";
import BestArticles from "./BestArticles";
import SearchBar from "./SearchBar";
import SocialSharing from "./SocialSharing";
import BlogContent from "./BlogContent";

const SinglePost = () => {
  const { slug } = useParams();
  const blog = BlogData.find((post) => post.slug === slug);

  if (!blog) {
    return <div>Post not found.</div>;
  }

  const topArticles = BlogData.slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-4 lg:px-8">
      <BlogFeatureImg imageSrc={blog.featureImage} altText={blog.title} />

      <BlogTitleAndMetaInfo
        title={blog.title}
        date={blog.date}
        time={blog.time}
        author={blog.author}
        categories={blog.categories}
      />

      <SocialSharing />

      <div className="flex flex-col md:flex-row mt-6">
        <div className="md:w-2/3 pr-6">
          <BlogContent blog={blog} />
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0">
          <SearchBar />
          <div className="mt-12">
            <AuthorBio
              authorPhoto={blog.authorPhoto}
              authorName={blog.author}
              bio={blog.authorBio}
              links={blog.authorLinks}
            />
          </div>

          <div className="mt-12">
            <BestArticles topArticles={topArticles} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <RelatedPosts category={blog.categories[0]} />
      </div>
    </div>
  );
};

export default SinglePost;
