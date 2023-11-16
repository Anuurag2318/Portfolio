import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  const iconSize = 40; // Adjust the size as needed

  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/anurag-tiwari2023" target="_blank" rel="noreferrer" style={{ fontSize: iconSize }}>
        <BsLinkedin />
      </a>
      <a href="https://github.com/Anuurag2318" target="_blank" rel="noreferrer" style={{ fontSize: iconSize }}>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
