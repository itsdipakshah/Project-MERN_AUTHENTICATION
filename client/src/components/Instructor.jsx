import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/photo.png";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Dipak kumar shah</h1>
          <h4>MERN Stack Developer</h4>
          <p>
            -with 6 months of hands-on experience building full-stack web applications using MongoDB, Express.js, React, and Node.js. Skilled in REST API development, authentication systems (JWT, email verification), and database design. Passionate about creating scalable and secure applications while continuously learning new technologies.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/itsdipakshah"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/itsdipakshah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
