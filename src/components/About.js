// About.js
import React from 'react';

import './About.css';



const About = () => {
  return (
    <section id="about" className="about-section">
       <div className="profile-container">
        <img src={'WhatsApp Image 2024-02-24 at 15.01.34_09fc1166.jpg'} alt="Profile" className="profile-image" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        
        <p>I am a WBL Intern at NIELIT (National Institute of Electronics and Information Technology),Kurukshetra under MINISTRIY OF ELECTRONICS AND INFORMATION TECHNOLOGY where I work on AI and train models for ongoing projects at NIELIT Kurukshetra. I have a Bachelor of Technology degree in Electronics and communication from University Institute of Engineering and Technology Kurukshetra, expected in 2024. I have over two years of work experience in engineering, web development, and IOT, currently working as an Engineer Intern at NIELIT, as an developer at CODSOFT. I have strong skills in engineering, C++, and C, as well as web development tools and frameworks. I am passionate about learning new technologies, solving problems, and creating innovative solutions. I am also a team player, a leader, and a communicator, who values collaboration, diversity, and excellence. </p>
        
        {/* Add more content or links as needed */}
      </div>
      </section>
 
  );
};

export default About;

