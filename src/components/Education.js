import React from "react";
import Slider from "react-slick";
import "./Education.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = () => {
  const experiences = [
    {
       logo: require("../assets/up-work.png"),
      company: "Upwork - Freelancing",
      roleType: "Freelance",
      responsibilities: [
        "Developed responsive front-end interfaces using React.js and CSS.",
        "Integrated APIs for smooth data handling and interactions.",
        "Delivered 10+ client projects on time with pixel-perfect design.",
        "Ensured performance optimization and browser compatibility.",
        "Maintained clean, reusable component structure."
      ],
    },
    {
      logo: require("../assets/navicon11.png"),
      company: "ReclameHub Marketing Agency",
      roleType: "Full Time",
      responsibilities: [
        "Worked as Full Stack Developer managing a small development team.",
        "Built scalable web applications using React, Node.js, and MongoDB.",
        "Achieved 95% client satisfaction rate across multiple projects.",
        "Integrated Redux for predictable and efficient state management.",
        "Handled deployment and production optimization tasks."
      ],
    },
    {
      logo: require("../assets/ShivNetra-logo.png"),
      company: "ShivNetra Tech Solutions",
      roleType: "Full Time",
      responsibilities: [
        "Worked on 'Proxyy' project, managing all front-end development.",
        "Developed AI-based interview panel UI using React and Tailwind.",
        "Handled API integration and advanced data visualization.",
        "Collaborated with backend team for seamless integration.",
        "Delivered fully customized user interfaces as per client needs.",
       ],
    },
        {
       logo: require("../assets/up-work.png"),
      company: "Upwork - Freelancing",
      roleType: "Freelance",
      responsibilities: [
        "Developed responsive front-end interfaces using React.js and CSS.",
        "Integrated APIs for smooth data handling and interactions.",
        "Delivered 10+ client projects on time with pixel-perfect design.",
        "Ensured performance optimization and browser compatibility.",
        "Maintained clean, reusable component structure."
      ],
    },
    {
      logo: require("../assets/navicon11.png"),
      company: "ReclameHub Marketing Agency",
      roleType: "Full Time",
      responsibilities: [
        "Worked as Full Stack Developer managing a small development team.",
        "Built scalable web applications using React, Node.js, and MongoDB.",
        "Achieved 95% client satisfaction rate across multiple projects.",
        "Integrated Redux for predictable and efficient state management.",
        "Handled deployment and production optimization tasks."
      ],
    },
    {
      logo: require("../assets/ShivNetra-logo.png"),
      company: "ShivNetra Tech Solutions",
      roleType: "Full Time",
      responsibilities: [
        "Worked on 'Proxyy' project, managing all front-end development.",
        "Developed AI-based interview panel UI using React and Tailwind.",
        "Handled API integration and advanced data visualization.",
        "Collaborated with backend team for seamless integration.",
        "Delivered fully customized user interfaces as per client needs.",
       ],
    },
  ];

 const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  variableWidth: false,  
  responsive: [
    {
      breakpoint: 1024, 
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,  
      settings: { slidesToShow: 1 },
    },
      {
      breakpoint: 576, 
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};


  return (
    <div className="experience-section" id="experience"> 
      <h2 className="experience-title">My Work Experience</h2>
      <p className="experience-subtitle">Where I’ve contributed professionally</p>

      <Slider {...settings} className="experience-slider">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="experience-card">
              <div className="experience-header">
                <img src={exp.logo} alt={exp.company} className="company-logo" />
                <h3 className="company-name">{exp.company}</h3>
              </div>

              <p className="role-type">{exp.roleType}</p>
              <h4 className="responsibilities-title">Responsibilities</h4>
              <ul className="responsibilities-list">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Experience;
