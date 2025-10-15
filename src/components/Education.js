import React from "react";
import { Container } from "react-bootstrap";
import "./Education.css";

const Education = () => {
  const workData = [
    { 
      years: "2021–2022", 
      logo: "logo1.png", 
      profile: `Freelance Frontend Developer <br> <span>Freelancing </span>`
    },
    { 
      years: "2022–2023", 
      logo: "logo2.png", 
      profile: `React.js Developer <br> <span>ShivNetra Tech Solutions</span>`
    },
    { 
      years: "2023–Present", 
      logo: "logo3.png", 
      profile: `Full-Stack Developer & Product Lead <br> <span>Reclame Hub Marketing Agency</span>`
    },
  ];

  return (
    <div className="Education-container">
      <h2 className="Education-heading">My Work Experience</h2>
      <p className="Education-subheading">Here’s where I’ve contributed</p>

      <Container className="Education-table">
        <div className="Education-row header">
          <div className="Education-cell">Years</div>
          <div className="Education-cell">Company Logo</div>
          <div className="Education-cell">Profile</div>
        </div>

        {workData.map((item, index) => (
          <div className="Education-row" key={index}>
            <div className="Education-cell">{item.years}</div>
            <div className="Education-cell">
              <img
                src={item.logo}
                alt="Company Logo"
                className="Education-logo"
              />
            </div>
            {/* ✅ Render HTML correctly */}
            <div
              className="Education-cell Education-profile"
              dangerouslySetInnerHTML={{ __html: item.profile }}
            ></div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Education;
