import React from "react";
import { Container } from "react-bootstrap";
import "./Advantage.css";

const advantageBoxes = [
  { value: "75%", label: "React" },
  { value: "65%", label: "Node.js" },
  { value: "80%", label: "HTML/CSS" },
  { value: "75%", label: "JavaScript" },
  { value: "75%", label: "Tailwind CSS" },
  { value: "50%", label: "Database" },
];

const Advantage = () => {
  return (
    <Container fluid className="adv-fluid">
      <Container className="adv-container">
        {/* Left Section */}
        <div className="adv-left-section">
          <div className="adv-left-card">
            <p className="adv-left-text special-subheading">
              <span className="special-text">2.5</span> <br />
              years of professional experience
            </p>
            <div className="adv-left-small-box">
              <p>95% client satisfaction.</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="adv-right-div">
          <div className="adv-heading-div">
            <h2>My Advantage</h2>
            <p>
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual and praising pain
              was born.
            </p>
          </div>

          <div className="adv-boxes-div">
            {advantageBoxes.map((box, index) => (
              <div key={index} className="adv-box">
                <p>{box.value}</p>
                <p>{box.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Advantage;
