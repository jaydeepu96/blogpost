import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Home from "./Componentes/Home";
import CreateBlog from "./Componentes/CreateBlog";
import BlogPostPage from "./Componentes/BlogPostPage";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/create" element={<CreateBlog addPost={addPost} />} />
          <Route
            path="/posts/:id"
            element={<BlogPostPage posts={posts} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
