import React from "react";
import BlogPost from "./BlogPost";
import BlogData from "./BlogData";

function Blog() {
  const reversedBlogData = [...BlogData].reverse(); // Create a reversed copy

  return (
    <div className="blog-container">
      {reversedBlogData.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;