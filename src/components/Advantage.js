import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./Advantage.css";

const advantageBoxes = [
  { value: 75, label: "React" },
  { value: 75, label: "JavaScript" },
  { value: 80, label: "HTML/CSS" },
  { value: 75, label: "Tailwind CSS" },
  { value: 65, label: "Node.js" },
  { value: 50, label: "Database" },
];

const Advantage = () => {
  const [animatedValues, setAnimatedValues] = useState(
    advantageBoxes.map(() => 25)
  );
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateValues();
          animateClientSatisfaction();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateValues = () => {
    advantageBoxes.forEach((box, index) => {
      let start = 25;
      const end = box.value;
      const duration = 1500;
      const increment = (end - start) / (duration / 20);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.round(start);
          return newValues;
        });
      }, 20);
    });
  };

  // 🎯 Animate 95% client satisfaction
  const animateClientSatisfaction = () => {
    let start = 0;
    const end = 95;
    const duration = 1500;
    const increment = (end - start) / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setClientSatisfaction(Math.round(start));
    }, 20);
  };

  return (
    <Container fluid className="adv-fluid" ref={sectionRef} id="about">
      <Container className="adv-container">
        {/* Left Section */}
        <div className="adv-left-section">
          <div className="adv-left-card">
            <p className="adv-left-text special-subheading">
              <span className="special-text">2.5</span> <br />
              years of professional experience
            </p>
            <div className="adv-left-small-box">
              <p>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                >
                  {clientSatisfaction}%
                </span>{" "}
                client satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="adv-right-div">
          <div className="adv-heading-div">
            <h2>My Advantage</h2>
            <p>
              My expertise lies in these technologies. With these skills, I build
              modern, efficient, and scalable web applications. I take pride in
              writing clean, maintainable code that works seamlessly in
              real-world projects, ensuring smooth user experiences and
              professional results every time.
            </p>
          </div>

          <div className="adv-boxes-div">
            {advantageBoxes.map((box, index) => (
              <div key={index} className="adv-box">
                <p>{animatedValues[index]}%</p>
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
