import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css"; 

const Home = ({ posts }) => {
  const navigate = useNavigate();
  const handleClick = (index) => {
    navigate(`/posts/${index}`);
  };

  return (
    <div className="home-container">
      <h1 className="home-header">Home</h1>
      <p className="home-description">Welcome to the blog application</p>
      {posts.map((post, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="post-container"
        >
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
