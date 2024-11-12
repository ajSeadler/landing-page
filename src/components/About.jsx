/* eslint-disable react/no-unescaped-entities */
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
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
          With experience in backend and frontend technologies, I bring a keen
          eye for design and functionality, aiming to make UX as seamless as
          possible. Take a look at some of my projects below!
        </p>
      </div>
    </section>
  );
};

export default About;
