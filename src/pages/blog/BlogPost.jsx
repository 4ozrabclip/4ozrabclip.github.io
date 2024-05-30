import React from "react";


const BlogPost = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
      <hr />
    </div>
  );
};

export default BlogPost;