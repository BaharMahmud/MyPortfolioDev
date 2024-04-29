import React, { useState, useEffect } from 'react';
import './Nav.css';
const Nav = () => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'myprojects', 'contact', 'resume'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const bounding = element.getBoundingClientRect();
          return bounding.top >= 0 && bounding.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About Me</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </li>
        <li className="nav-item">
          <a href="#download-resume" className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}>Resume</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;







