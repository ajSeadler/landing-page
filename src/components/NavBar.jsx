import { useEffect, useState, useRef } from "react";
import {
  FiHome,
  FiUser,
  FiFileText,
  FiCode,
  FiMail,
  FiMenu,
} from "react-icons/fi";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const [currentTime, setCurrentTime] = useState(""); // State for current time
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const lastScrollY = useRef(window.scrollY);
  const scrollThreshold = 50; // Define scroll threshold

  // Update time every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
      hours = hours % 12 || 12; // Convert to 12-hour format
      setCurrentTime(
        <>
          {hours}:{minutes} <span className="ampm">{ampm}</span>
        </>
      );
    };

    updateClock(); // Initialize on mount
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle scroll visibility
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
      <div
        className="menu-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {/* Hamburger menu icon */}
        <FiMenu />
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <Link
            to="/"
            className={`nav-item ${activeLink === "home" ? "active" : ""}`}
            onClick={() => {
              setActiveLink("home");
              setIsMobileMenuOpen(false);
            }}
          >
            <FiHome className="icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <a
            href="#about"
            className={`nav-item ${activeLink === "about" ? "active" : ""}`}
            onClick={() => {
              setActiveLink("about");
              setIsMobileMenuOpen(false);
            }}
          >
            <FiUser className="icon" />
            <span>About</span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`nav-item ${activeLink === "projects" ? "active" : ""}`}
            onClick={() => {
              setActiveLink("projects");
              setIsMobileMenuOpen(false);
            }}
          >
            <FiCode className="icon" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className={`nav-item ${activeLink === "blog" ? "active" : ""}`}
            onClick={() => {
              setActiveLink("blog");
              setIsMobileMenuOpen(false);
            }}
          >
            <FiFileText className="icon" />
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nav-item ${activeLink === "contact" ? "active" : ""}`}
            onClick={() => {
              setActiveLink("contact");
              setIsMobileMenuOpen(false);
            }}
          >
            <FiMail className="icon" />
            <span>Contact</span>
          </a>
        </li>
      </ul>
      <div className="current-time">{currentTime}</div>
    </nav>
  );
}
