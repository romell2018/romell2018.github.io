import React from 'react';
import './Home.css';
import romell from '../logo/romell.jpg';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import Cpp from '../logo/skills/c-.png';
import java from '../logo/skills/java.png';
import js from '../logo/skills/java-script.png';
import py from '../logo/skills/python.png';

const Home = () => {
  const interests = ["AI.", "Machine Learning.", "Robotics.", "Computer Engineering.", "Cloud Engineering"];
  const skills = [
    { name: 'C++',logo: Cpp }, 
    { name: 'Java', logo: java },
    { name: 'JavaScript', logo: js },
    { name: 'Python',logo: py }, 
    
    // Add more skills here
  ];

  return (
    <section id="home">
      <div className="content">
        <h1 className="name">Romell Mertis</h1>
        <p className="interests">
          I am interested in{" "}
          <ReactTyped className="animcol"
            strings={interests} // Array of strings to animate
            typeSpeed={40} // Speed of typing
            backSpeed={50} // Speed of deleting
            loop // Loop animation
          />
        </p>
        <div>Software Engineer</div>
        Miami, Florida
        <div className="social-links">
          <a href="https://github.com/romell2018" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/romellmertis/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
          <a href="https://youtube.com/romellmertis" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></a>
        </div>
        <img className="romell-photo" src={romell} alt="Romell Mertis" />
      </div>

       {/* Skills section */}
       <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
