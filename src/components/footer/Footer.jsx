import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const iconSize = 40; // Adjust the size as needed
  return (
    <footer>
      <a href="#home" className="footer__logo">Anurag Tiwari</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/anurag-tiwari2023/" target="_blank" rel="noreferrer" style={{ fontSize: iconSize }}><BsLinkedin /></a>
      <a href="https://github.com/Anuurag2318" target="_blank" rel="noreferrer" style={{ fontSize: iconSize }}><FaGithub /></a>
      </div>
      {/* <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div> */}
    </footer>
  )
}

export default Footer