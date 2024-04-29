import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Bahar Mahmud. All rights reserved.</p>
    <div className="social-media">
      <a href="https://instagram.com/baxarka" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://linkedin.com/in/Bahar" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://facebook.com/BaharMahmud" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://github.com/BaharMahmud" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  </footer>
);
export default Footer;







