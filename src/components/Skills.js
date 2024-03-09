// Skills.js
import React from 'react';
import './Skills.css'; // Create a new CSS file for styling if needed

const Skills = () => {
  const skillsList = ['C++ ',' JAVA ', 'SQL' , 'Operating System' , 'Database Management System' , 'HTML' , 'CSS' , 'JavaScript' , 'React'  ,' Python ',' Data Structure and Algorithm' ,'Computer Network ', 'Problem-Solving' , 'Strong Analytical Skills'
   , 'Verilog HDL' ,'Matlab' , 'IOT' , 'Machine Learning' , 'Software Verification and Validation Testing',
    'Version Control: Git' , 'Team Collaboration' , 'Leadership' , 'Debating'];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
