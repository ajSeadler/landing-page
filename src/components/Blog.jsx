import {
  FaCalendarAlt,
  FaArrowRight,
  FaShareAlt,
  FaRegFrown,
} from "react-icons/fa";
import "../styles/Blog.css";

const blogPosts = []; // Set to empty to test the no-posts message

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h2 className="section-title">Blog</h2>
      <div className="blog-list">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-date">
                  <FaCalendarAlt /> {post.date}
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-actions">
                  <a href={post.link} className="button read-more">
                    Read More <FaArrowRight />
                  </a>
                  <button className="button share-button">
                    <FaShareAlt /> Share
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-posts-message">
            <FaRegFrown className="no-posts-icon" />
            <p>It’s a bit quiet here... No recent blog posts yet!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
