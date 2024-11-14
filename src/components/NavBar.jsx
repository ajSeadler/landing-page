import { useEffect, useState, useRef } from "react";
import { FiHome, FiUser, FiFileText, FiCode, FiMail } from "react-icons/fi";
import "../styles/NavBar.css";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false); //keep this as true until animation doesnt happen on mobile. animation should only happen on desktop
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-item">
            <FiHome className="icon" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="nav-item">
            <FiUser className="icon" />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-item">
            <FiCode className="icon" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#blog" className="nav-item">
            <FiFileText className="icon" />
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-item">
            <FiMail className="icon" />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
