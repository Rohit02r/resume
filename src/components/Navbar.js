import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navb'>
    <nav className="navbar">
      <h2 className="logo fs-3">Rohit R's Portfolio</h2>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul><hr/>
          <li><a href="#profile" onClick={toggleMenu}>Profile</a></li><hr/>
          <li><a href="#about" onClick={toggleMenu}>About</a></li><hr/>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li><hr/>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
