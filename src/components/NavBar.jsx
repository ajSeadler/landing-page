import { useEffect, useState, useRef } from "react";
import { FiHome, FiUser, FiFileText, FiCode, FiMail } from "react-icons/fi";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const lastScrollY = useRef(window.scrollY);
  const scrollThreshold = 50; // Define scroll threshold

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
        // Ignore small scroll changes below the threshold
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // Hide navbar on significant scroll down
      } else {
        setIsVisible(true); // Show navbar on significant scroll up
      }

      lastScrollY.current = currentScrollY; // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={`nav-item ${activeLink === "home" ? "active" : ""}`}
            onClick={() => setActiveLink("home")}
          >
            <FiHome className="icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <a
            href="#about"
            className={`nav-item ${activeLink === "about" ? "active" : ""}`}
            onClick={() => setActiveLink("about")}
          >
            <FiUser className="icon" />
            <span>About</span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`nav-item ${activeLink === "projects" ? "active" : ""}`}
            onClick={() => setActiveLink("projects")}
          >
            <FiCode className="icon" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className={`nav-item ${activeLink === "blog" ? "active" : ""}`}
            onClick={() => setActiveLink("blog")}
          >
            <FiFileText className="icon" />
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nav-item ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => setActiveLink("contact")}
          >
            <FiMail className="icon" />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
