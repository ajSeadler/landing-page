import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // X icon
import "../styles/Projects.css";

const projects = [
  {
    title: "SkateTracker",
    description:
      "This C.R.U.D. application allows users to sign up and create profiles where they can add tricks from a Postgres database. Users can track their progress, marking tricks as either mastered or still learning, earning points for mastering tricks and keeping a detailed record of all their activities. Users may also set personalized goals with target dates.",
    techStack: ["React", "Node.js", "Postgres", "Express.js"],
    image: "/skate-tracker.png", // Replace with actual image paths
    liveLink: "https://github.com/ajSeadler/SkateTracker",
    repoLink: "https://github.com/ajSeadler/SkateTracker",
  },
  {
    title: "Disco Stranger Music",
    description:
      "This website is the official platform for my band, Disco Stranger, featuring a vibrant parallax design with a merch section and a booking form. Built with JavaScript, React, and CSS, venues can easily send us gig requests through the website, while fans can explore our latest releases and browse merchandise directly from the site.",
    techStack: ["React", "JavaScript", "CSS"],
    image: "/ds-site.png", // Replace with actual image paths
    liveLink: "https://discostrangermusic.com",
    repoLink: "https://github.com/ajSeadler/band-website",
  },
  {
    title: "Circle of Fifths Viewer",
    description:
      "The Circle of Fifths Viewer is a web application I developed to help users visualize and understand the relationships between musical keys. This interactive tool features an intuitive interface that allows users to explore the Circle of Fifths, view chord progressions within the key they choose, and easily transpose music between different keys.",
    techStack: ["JavaScript", "React.js", "CSS", "Mobile-Friendly"],
    image: "/cof.png", // Replace with actual image paths
    liveLink: "https://circleoffifthsviewer.com",
    repoLink: "https://github.com/ajSeadler/scale-viewer",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));
  const [largeImage, setLargeImage] = useState(null);

  const toggleReadMore = (index) => {
    setExpanded((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const openLargeView = (image) => {
    setLargeImage(image);
  };

  const closeLargeView = () => {
    setLargeImage(null);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => {
          const isExpanded = expanded[index];
          const previewTextLength = Math.floor(
            project.description.length * 0.4
          );
          const displayedText = isExpanded
            ? project.description
            : `${project.description.slice(0, previewTextLength)}...`;

          return (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onClick={() => openLargeView(project.image)} // Click on image
              />
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {displayedText}
                  {!isExpanded && (
                    <span
                      className="read-more"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReadMore(index);
                      }}
                    >
                      Read more
                    </span>
                  )}
                  {isExpanded && (
                    <span
                      className="read-less"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReadMore(index);
                      }}
                    >
                      Show less
                    </span>
                  )}
                </p>
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
                    <FaExternalLinkAlt /> Visit Website
                  </a>
                  <a
                    href={project.repoLink}
                    className="button repo-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> View Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
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
