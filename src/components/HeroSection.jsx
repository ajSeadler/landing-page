import { FaJs, FaReact, FaNodeJs, FaPython, FaLinux } from "react-icons/fa";
import { SiPostgresql, SiExpress, SiSqlite } from "react-icons/si";

import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Anthony Seadler</h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-location">Oklahoma City, OK</p>

        <div className="hero-skills">
          <span className="skill">
            <FaJs className="icon" /> JavaScript
          </span>
          <span className="skill">
            <SiPostgresql className="icon" /> PostgreSQL
          </span>
          <span className="skill">
            <FaReact className="icon" /> React
          </span>
          <span className="skill">
            <FaNodeJs className="icon" /> Node.js
          </span>
          <span className="skill">
            <FaPython className="icon" /> Python
          </span>
          <span className="skill">
            <SiSqlite className="icon" /> SQL
          </span>
          <span className="skill">
            <SiExpress className="icon" /> Express.js
          </span>
          <span className="skill">
            <FaLinux className="icon" /> Linux OS
          </span>
        </div>
      </div>
    </section>
  );
}
