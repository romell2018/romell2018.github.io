import React from 'react';

import clothingweb from '../logo/0.jpg';
// import dio from '../logo/dio.jpg';
// import pro from '../logo/pro.jpg';

import './Projects.css'; // Import the CSS for styling

const projects = [
  {
    title: 'Duvenchy Clothing',
    description: 'Clothing website using React, TailwindCSS, and Go lang for the backend',
    img: clothingweb, // Add your own image path
    link: 'https://shop.duvenchy.com',
    sourceCode: 'https://github.com/your-repo/project2'
  },
  // {
  //   title: 'Project 2',
  //   description: 'This is a description of project 2. This is a description of project 2. This is a description of project 2. This is a description of project 2.',
  //   img: dio,
  //   link: 'https://google.com',
  //   sourceCode: 'https://github.com/your-repo/project2'
  // },
  // {
  //   title: 'Project 3',
  //   description: 'This is a description of project 3.',
  //   img: pro,
  //   link: '#',
  //   sourceCode: 'https://github.com/your-repo/project2'
  // },
  // {
  //   title: 'Project 1',
  //   description: 'This is a description of project 1.',
  //   img: clothingweb, // Add your own image path
  //   link: '#',
  //   sourceCode: 'https://github.com/your-repo/project2'
  // },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <div className="project-image-container"> {/* Add this container */}
              <img src={project.img} alt={project.title} className="project-image" />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              <a href={project.sourceCode} className="project-link" target="_blank" rel="noopener noreferrer">
                See Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
