import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./Home.css";

const logos = [
  { src: require("../assets/banner/1.png"), alt: "React" },
  { src: require("../assets/banner/2.png"), alt: "Node" },
  { src: require("../assets/banner/3.png"), alt: "HTML" },
  { src: require("../assets/banner/4.png"), alt: "CSS" },
  { src: require("../assets/banner/5.png"), alt: "JavaScript" },
  { src: require("../assets/banner/6.png"), alt: "Tailwind CSS" },
  { src: require("../assets/banner/7.png"), alt: "Database" },
  { src: require("../assets/banner/8.png"), alt: "Database" },
];

const Home = () => {

  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container fluid id="home" className="home-banner">
      <div className="overlay"></div>
      <Container className="home-content">
        <div className="banner-left">
          <p className="banner-heading">Hello,</p>
          <p className="banner-heading">I'am <span className="highlight">Rishab Dutt</span>.</p>
          <p className="banner-subheading">Full Stack Developer</p>
          <p className="page-text">
            I specialize in building high-performance, scalable, and user-focused web applications.
            With expertise across both front-end and back-end technologies, I transform ideas into
            seamless digital experiences that drive impact.
          </p>
        </div>

        {/* Circular Logos on Desktop */}
        <div className="circle-container">
          <div className="circle">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={`circle-logo logo-${index + 1}`}
              />
            ))}
          </div>
          {/* Center Text */}
          <div className="circle-center-text">
            <p>Tools & <br />Technologies</p>
          </div>
        </div>


        {/* Slick Slider for Mobile */}
        <div className="slick-mobile">
          <Slider {...sliderSettings}>
            {logos.map((logo, index) => (
              <div key={index} className="slider-logo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Container>
  );
};

export default Home;
