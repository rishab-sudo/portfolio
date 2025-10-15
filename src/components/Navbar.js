import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          {/* <img src={require("../assets/logo.png")} alt="Logo" /> */}
          <h2>MySchool</h2>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><ScrollLink to="home" smooth={true} duration={600} offset={-80} onClick={closeMenu}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={600} offset={-80} onClick={closeMenu}>About</ScrollLink></li>
          <li><ScrollLink to="academics" smooth={true} duration={600} offset={-80} onClick={closeMenu}>Academics</ScrollLink></li>
          <li><ScrollLink to="admission" smooth={true} duration={600} offset={-80} onClick={closeMenu}>Admission</ScrollLink></li>
          <li><ScrollLink to="gallery" smooth={true} duration={600} offset={-80} onClick={closeMenu}>Gallery</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={600} offset={-80} onClick={closeMenu}>Contact</ScrollLink></li>
        </ul>

        {/* HAMBURGER ICON */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
