import React, { useState } from "react";
import "../css/createblog.css"; 

const CreateBlog = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="create-blog-container">
      <form onSubmit={handleSubmit} className="create-blog-form">
        <h1>Create New Blog Post</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="create-blog-input"
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="create-blog-input"
        />
        <input type="submit" value="Submit" className="create-blog-input" />
      </form>
    </div>
  );
};

export default CreateBlog;
