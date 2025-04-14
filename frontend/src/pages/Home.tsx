import React from "react";
import { Link } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import "../styles/Home.css";

const Home: React.FC = () => {
  const programmingSkills = [
    "Python",
    "C/C++",
    "C#",
    "JavaScript",
    "TypeScript",
  ];
  const frameworkSkills = ["React", ".NET", "Git", "Docker", "AWS"];
  const otherSkills = [
    "Linux Command Line",
    "Shell Scripting",
    "Problem Solving",
    "Team Leadership",
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Rom Eisenberg</h1>
          <h2>Computer Science Student</h2>
          <p>
            I'm a passionate developer and third-year Computer Science student
            seeking a software engineering role where I can apply my skills,
            contribute, and grow.
          </p>
          <div className="hero-buttons">
            <a
              href="/assets/Rom_Eisenberg_Resume.pdf"
              download="Rom_Eisenberg_Resume.pdf"
              className="btn btn-primary"
            >
              Resume
            </a>
            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a dedicated third-year Computer Science student at the
              Academic College of Tel Aviv-Yaffo with a passion for technology
              and problem-solving. My journey in tech began as a NOC Engineer at
              Radware, where I monitor global cloud infrastructure and ensure
              service availability for top-tier companies. Through this
              experience, I have developed strong technical and interpersonal
              skills, handling network incidents under pressure while
              maintaining operational stability.
            </p>
            <p>
              I am driven by a deep motivation to learn and explore new
              technologies. I thrive in dynamic environments that challenge me
              to expand my knowledge and adapt to emerging fields. Whether it's
              diving into new programming languages, understanding complex
              systems, or experimenting with innovative solutions, I am always
              eager to grow.
            </p>
            <p>
              Expected to graduate in July 2026, I am actively seeking a
              software engineering role where I can apply my skills, contribute
              meaningfully, and continue my journey of learning and professional
              development.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h3>Education</h3>
                <p>B.Sc. Computer Science</p>
                <p>The Academic College of Tel Aviv-Yaffo</p>
                <p>2022 - 2026 (Expected)</p>
              </div>
            </div>
            <div className="detail-item">
              <i className="fas fa-briefcase"></i>
              <div>
                <h3>Experience</h3>
                <p>NOC Engineer</p>
                <p>Radware, Tel-Aviv</p>
                <p>2021 - 2024</p>
              </div>
            </div>
            <div className="detail-item">
              <i className="fas fa-medal"></i>
              <div>
                <h3>Military Service</h3>
                <p>Combat Medic</p>
                <p>'The Multidimensional Unit' (Refaim)</p>
                <p>2018 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-container">
          <SkillCard
            title="Programming Languages"
            skills={programmingSkills}
            icon="fas fa-code"
          />
          <SkillCard
            title="Frameworks & Tools"
            skills={frameworkSkills}
            icon="fas fa-tools"
          />
          <SkillCard
            title="Other Skills"
            skills={otherSkills}
            icon="fas fa-laptop-code"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
