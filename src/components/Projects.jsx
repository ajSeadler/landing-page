import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import Lottie from "lottie-react";
import projectsAnimation from "../assets/projects-animation.json"; // Import Lottie animation file
import "../styles/Projects.css";

const projects = [
  {
    title: "SkateTracker",
    description:
      "A C.R.U.D. app for tracking skateboarding tricks and progress with gamified features.",
    techStack: ["React", "Node.js", "Postgres", "Express.js"],
    image: "/skate-tracker.png",
    liveLink: "https://github.com/ajSeadler/SkateTracker",
    repoLink: "https://github.com/ajSeadler/SkateTracker",
  },
  {
    title: "Circle of Fifths Viewer",
    description:
      "Interactive tool to explore and visualize musical key relationships.",
    techStack: ["JavaScript", "React.js", "CSS"],
    image: "/cof.png",
    liveLink: "https://circleoffifthsviewer.com",
    repoLink: "https://github.com/ajSeadler/scale-viewer",
  },
  {
    title: "Disco Stranger Music",
    description:
      "Official band site featuring parallax design, a merch section, and booking form.",
    techStack: ["React", "JavaScript", "CSS"],
    image: "/ds-site.png",
    liveLink: "https://discostrangermusic.com",
    repoLink: "https://github.com/ajSeadler/band-website",
  },
];

const Projects = () => {
  const [largeImage, setLargeImage] = useState(null);

  const openLargeView = (image) => setLargeImage(image);
  const closeLargeView = () => setLargeImage(null);

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-animation">
        <Lottie animationData={projectsAnimation} loop={true} />
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => openLargeView(project.image)}
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <a
                  href={project.liveLink}
                  className="button live-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Website
                </a>
                <a
                  href={project.repoLink}
                  className="button repo-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {largeImage && (
        <div className="large-image-view">
          <div className="overlay" onClick={closeLargeView}></div>
          <div className="large-image-container">
            <img src={largeImage} alt="Large view" />
            <AiOutlineClose className="close-icon" onClick={closeLargeView} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
