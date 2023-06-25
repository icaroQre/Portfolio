"use client";

import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-scroll';

export default function MobileMenu () {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onMouseUpCapture={handleClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      <ul>
        <li> <Link to="home-container" smooth={true} > Home </Link> </li>
        <li> <Link to="about-container" smooth={true}> Sobre </Link> </li>
        <li> <Link to="home-container" smooth={true} > Contato </Link> </li>
        <li> <a href="https://github.com/icaroQre"> Git Hub </a></li>
        <li> <Link to="project-container" smooth={true}> Projetos </Link> </li>
      </ul>
    </div>
    </>
  );
};
