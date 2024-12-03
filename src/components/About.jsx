import "../styles/About.css";
import {
  FaCode,
  FaShieldAlt,
  FaMountain,
  FaCamera,
  FaGamepad,
  FaBookOpen,
  FaGuitar,
} from "react-icons/fa"; // Importing specific icons

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <p>
          Hi there! I'm <strong>Anthony Seadler</strong>, though most people
          call me AJ. I'm a full-stack developer with a Web Development
          certification from the University of Oklahoma and Fullstack Academy.
          Currently, I’m pursuing a Bachelor of Science in Cybersecurity at
          Southern Nazarene University, combining my passion for development
          with a strong focus on security.
        </p>
        <p>
          With experience in backend and frontend practices, I bring a keen eye
          for design and functionality, aiming to make UX as friendly as
          possible. Take a look at some of my projects below!
        </p>
      </div>

      <section className="hobbies">
        <h3 className="hobbies-title">Hobbies & Interests</h3>
        <ul className="hobbies-list">
          <li>
            <FaCode /> Web Development
          </li>
          <li>
            <FaShieldAlt /> Cybersecurity
          </li>
          <li>
            <FaMountain /> Outdoor Hiking
          </li>

          <li>
            <FaGuitar /> Guitar
          </li>
          <li>
            <FaBookOpen /> Reading: Sci-fi/Fantasy
          </li>
        </ul>
      </section>
    </section>
  );
};

export default About;
