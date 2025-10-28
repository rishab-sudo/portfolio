import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Education.css";

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
        "Maintained clean, reusable component structure.",
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
      logo: require("../assets/navicon11.png"),
      company: "ReclameHub Marketing Agency",
      roleType: "Full Time",
      responsibilities: [
        "Worked as Full Stack Developer managing a small development team.",
        "Built scalable web applications using React, Node.js, and MongoDB.",
        "Achieved 95% client satisfaction rate across multiple projects.",
        "Integrated Redux for predictable and efficient state management.",
        "Handled deployment and production optimization tasks.",
      ],
    },
 
  ];

  return (
    <div className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        style={{ padding: "20px 0" }}
      >
        {experiences.map((exp, index) => (
          <SwiperSlide key={index}>
            <div className="experience-card">
              <div className="experience-logo-div">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="experience-logo-top"
                />
              </div>
              <h3 className="company-name">{exp.company}</h3>
              <p className="role-type">{exp.roleType}</p>
              <ul className="responsibility-list">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience;
