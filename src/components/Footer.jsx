import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#blog" className="footer-link">
            Blog
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/ajSeadler"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/anthony-seadler"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Anthony Seadler. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
