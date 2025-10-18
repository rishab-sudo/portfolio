import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import ResumePDF from '../assets/pdf/Resume_rishab2025 (1).pdf'; // <-- Put your PDF in assets folder

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="nav-logo">
          <img src={require("../assets/logo-prsn.png")} alt="" />
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><ScrollLink to="home" duration={600} offset={-80} onClick={closeMenu}>Home</ScrollLink></li>
          <li><ScrollLink to="about" duration={600} offset={-80} onClick={closeMenu}>About</ScrollLink></li>
          <li><ScrollLink to="experience" duration={600} offset={-80} onClick={closeMenu}>Experience</ScrollLink></li>
          <li><ScrollLink to="recentWork" duration={600} offset={-80} onClick={closeMenu}>Projects</ScrollLink></li>
    {/* RESUME BUTTON */}
          <li>
            <a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
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
