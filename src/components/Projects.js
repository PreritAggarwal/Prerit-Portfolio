// Projects.js
import React from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <Project1 />
        <Project3 />
        <Project2 />
        </div>
    </section>
  );
};

export default Projects;
