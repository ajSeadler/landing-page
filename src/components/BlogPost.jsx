/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/BlogPost.css";
const BlogPost = ({ posts }) => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const post = posts.find((p) => p.id === id); // Match the blog post by ID

  if (!post) {
    return (
      <div className="blog-post">
        <h2>Post Not Found</h2>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <h2 className="blog-title">{post.title}</h2>
      <p className="blog-date">
        <FaCalendarAlt /> {post.date}
      </p>
      <div className="blog-content">
        {/* Safely render HTML content */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Link to={"/"}>back</Link>
    </div>
  );
};

export default BlogPost;
