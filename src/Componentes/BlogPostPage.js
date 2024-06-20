import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/blogpost.css"; 

const BlogPostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts[id];
  const navigate = useNavigate();

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post-page-container">
      <div className="blog-post-container">
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-content">{post.content}</p>
        <button onClick={() => navigate("/")} className="blog-post-button">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default BlogPostPage;
