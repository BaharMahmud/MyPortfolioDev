import React from 'react';
import './header.css';
const Header = () => (
  <header className="header">
    <h1>Hello, I'm</h1>
    <h3>Bahar Mahmud</h3>
    <a href="/src/assets/Resume.pdf" download="Resume.pdf" className="resume-button" id="download-resume">
      Download Resume
    </a>
  </header>
);
export default Header;