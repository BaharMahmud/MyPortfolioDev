import React, { useEffect } from 'react';
import './About.css';
const About = () => {
  // Scroll the About component into view when the component mounts
  useEffect(() => {
    document.getElementById('about').scrollIntoView();
  }, []);
  return (
    <div className="about" id="about">
      <img src='/src/assets/myPhoto.jpg' alt="Profile" className="profile-pic" />

      <h3>About Me</h3>
    <p>As a full stack developer, my journey has been driven by an unyielding passion for creating seamless user experiences and robust backend solutions. With a keen eye for design and a methodical approach to problem-solving, I've honed my skills in both front-end and back-end technologies, enabling me to craft intuitive interfaces and scalable server architectures. My portfolio showcases a spectrum of projects that reflect a deep understanding of the full software development lifecycle, from conceptualization to deployment. Each project is a testament to my ability to work with a diverse stack, including but not limited to React, Node.js, and database management systems, and highlights my commitment to writing clean, maintainable code. I take pride in my adaptability and my collaborative spirit, thriving in environments that challenge me to learn and grow alongside my peers. Whether I'm optimizing API performance or ensuring responsive design, my ultimate goal remains the same: to deliver exceptional digital solutions that drive success.
      </p>
      </div>
  );
};
export default About;