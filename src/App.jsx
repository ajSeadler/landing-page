import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";
import blogPosts from "../data/blogPosts"; // Update path to match your file structure

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost posts={blogPosts} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
