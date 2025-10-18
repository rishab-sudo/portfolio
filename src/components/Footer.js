import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import { FaLinkedin, FaWhatsapp, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-brand">
            <img
              src={require("../assets/logo-prsn.png")}
              alt="Brand Logo"
              className="footer-logo"
            />
            <div className="footer-brand-name">
              <h3>Rishab Dutt</h3>
              <p>Web Developer</p>
            </div>
          </div>
          <p className="footer-desc">
            I’m a passionate Full Stack Developer dedicated to building impactful digital solutions.
            With expertise in web development, digital marketing, and SEO,
            I help businesses grow online through performance-driven and visually engaging web experiences.
          </p>

          <div className="footer-socials">
            <a href="https://www.naukri.com" target="_blank" rel="noreferrer">
              <FaBriefcase />
            </a>
            <a
              href="https://www.linkedin.com/in/rishab-dutt"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/7037923696"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#recentWork">Projects</a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <button className="contact-btn">Contact </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dexterity. All Rights Reserved.</p>
      </div>
    </Container>
  ); 
};

export default Footer;
