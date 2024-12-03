import { Link } from "react-router-dom"; // Import Link for navigation
import { FaCalendarAlt, FaArrowRight, FaRegFrown } from "react-icons/fa";
import "../styles/Blog.css";

const blogPosts = [
  // {
  //   id: "getting-into-it", // Unique identifier for the blog post
  //   image: "path-to-your-image.jpg",
  //   title: "Getting Into IT: My Journey in Web Development and Cybersecurity",
  //   date: "November 26, 2024",
  //   excerpt:
  //     "From my first lines of HTML to diving into pen testing with Python, here's how I got started in IT and the lessons I learned along the way.",
  //   content: `
  //     <p>Starting in IT was daunting, but it’s a field that rewards persistence...</p>
  //     <p>My first encounter with programming was...</p>
  //     <p>Here are some key takeaways...</p>
  //   `, // Use a string or JSX for blog content
  // },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h2 className="section-title">Blog</h2>
      <div className="blog-list">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              {/* Optionally uncomment if you have images */}
              {/* <img src={post.image} alt={post.title} className="blog-image" /> */}
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-date">
                  <FaCalendarAlt /> {post.date}
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-actions">
                  <Link to={`/blog/${post.id}`} className="button read-more">
                    Read More <FaArrowRight />
                  </Link>
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
