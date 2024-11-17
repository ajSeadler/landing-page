import { useEffect, useState, useRef, useMemo } from "react";
import {
  FaCode,
  FaRunning,
  FaGuitar,
  FaCat,
  FaGraduationCap,
} from "react-icons/fa";
import "../styles/Timeline.css";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);

  const timelineData = useMemo(
    () => [
      {
        date: "December 2023",
        content:
          "Full-stack Web Development Certificate - The University of Oklahoma and Fullstack Academy. December 2023.",
        image: "/WebDevCert.jpg",
        icon: <FaCode />,
      },
      {
        date: "September 2024",
        content:
          "Bachelor's of Science in Cyber Security at Southern Nazarene University in Bethany, Oklahoma. Class of 2025",
        image: "/snu.svg",
        icon: <FaGraduationCap />,
      },
      {
        date: "February 2024",
        content: "Exercise is good :)",
        image: "/skateboarding.jpg",
        icon: <FaRunning />,
      },
      {
        date: "March 2024",
        content: "I like to play live music in my free time!",
        image: "/guitar.JPG",
        icon: <FaGuitar />,
      },
      {
        date: "April 2024",
        content: "Take a look below!",
        image: "/rooster.jpg",
        icon: <FaCat />,
      },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [timelineData]);

  const handleNodeClick = (index) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setActiveIndex(index);
  };

  return (
    <div className="timeline-container">
      <div className="timeline-sidebar">
        <div className="timeline-line">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-node ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleNodeClick(index)}
            >
              <span className="timeline-icon">{item.icon}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="timeline-content">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-section"
            ref={(el) => (sectionsRef.current[index] = el)}
          >
            <img
              src={item.image}
              alt={`Event for ${item.date}`}
              className="timeline-image"
            />
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
