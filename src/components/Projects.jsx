import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const projects = [
  {
    title: "SkateTracker",
    description:
      "This full-stack application allows users to sign up and create profiles where they can add tricks from a central tricks database. Users can track their progress, marking tricks as either mastered or still learning, earning points for mastering tricks and keeping a detailed record of all their activities. Users may also set personalized goals with target dates.",
    techStack: ["React", "Node.js", "Postgres", "Express.js"],
    image: "profile.png", // Replace with actual image paths
    liveLink: "https://example.com",
    repoLink: "https://github.com/username/project3",
  },
  {
    title: "Disco Stranger Music",
    description:
      "The website is the official platform for my band, Disco Stranger, featuring a vibrant parallax design with a merch section and a booking form. Built with JavaScript, React, and CSS, venues can easily send us gig requests through the website, while fans can explore our latest releases and browse merchandise directly from the site.",
    techStack: ["React", "Javacript", "CSS"],
    image: "/ds-site.png", // Replace with actual image paths
    liveLink: "https://discostrangermusic.com",
    repoLink: "https://github.com/username/project2",
  },
  {
    title: "Circle of Fifths Viewer",
    description:
      "The Circle of Fifths Viewer is a web application I developed to help users visualize and understand the relationships between musical keys. This interactive tool features an intuitive interface that allows users to explore the Circle of Fifths, view chord progressions within the key they choose, and easily transpose music between different keys.",
    techStack: ["JavaScript", "React.js", "CSS", "Mobile-Friendly"],
    image: "/cof.png", // Replace with actual image paths
    liveLink: "https://circleoffifthsviewer.com",
    repoLink: "https://github.com/username/project1",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
