import React, { useEffect, useRef } from 'react';
import './RecentWork.css';
import { Container } from 'react-bootstrap';

const OverlappingCards = () => {
  const cardsRef = useRef([]);

  // 👉 Card data (You can add more easily)
  const cardData = [
    {
      id: 1,
      img: require("../assets/projects/1.png"),
      title: "Custom Clothing eCommerce Platform",
      description: "Successfully developed a fully functional eCommerce platform for a custom clothing brand, featuring personalized product options and a seamless shopping experience."
    },
    {
      id: 2,
      img: require("../assets/projects/2.png"),
      title: "Modern eCommerce Website",
      description: "Designed and delivered a responsive eCommerce website with advanced filtering, cart, and checkout functionality to enhance user engagement."
    },
    {
      id: 3,
      img: require("../assets/projects/3.png"),
      title: "Restaurant App UI Design",
      description: "Created an elegant and user-friendly restaurant application UI that simplifies menu browsing, ordering, and table reservation."
    },
    {
      id: 4,
      img: require("../assets/projects/4.png"),
      title: "Corporate Branding Website",
      description: "Successfully completed a professional corporate branding website that reflects brand identity with modern design aesthetics and smooth navigation."
    },
    {
      id: 5,
      img: require("../assets/projects/5.png"),
      title: "Architecture Firm Website",
      description: "Developed a visually rich architecture website showcasing projects, services, and portfolios through a clean and structured layout."
    },
    {
      id: 6,
      img: require("../assets/projects/6.png"),
      title: "Essential eCommerce Platform",
      description: "Delivered a complete eCommerce solution with efficient product management, intuitive UI, and secure online transactions."
    },
    {
      id: 7,
      img: require("../assets/projects/7.png"),
      title: "Proxy Management Web App",
      description: "Successfully built a functional and optimized proxy management web application with advanced settings and secure access control."
    },
    {
      id: 8,
      img: require("../assets/projects/8.png"),
      title: "Educational Learning Website",
      description: "Developed an interactive educational website providing structured course content and a smooth learning experience for students."
    },
    {
      id: 9,
      img: require("../assets/projects/9.png"),
      title: "Portfolio Showcase Website",
      description: "Created a professional and visually appealing portfolio website to highlight creative works and previous successful projects."
    },
    {
      id: 10,
      img: require("../assets/projects/10.png"),
      title: "Customized Web Application",
      description: "Successfully delivered a fully customized web application tailored to client requirements with a modern interface and scalable features."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('lift');
          else entry.target.classList.remove('lift');
        });
      },
      { threshold: 0.5 }
    );

    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => cardsRef.current.forEach(card => card && observer.unobserve(card));
  }, []);

  return (
    <Container fluid className='stack-section'>
      <div className='text-center work-heading-div'>
        <p className='page-heading text-white'>Recent Work</p>
      </div>

      <Container className="stack-section-card">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`card card${index + 1}`}
            ref={el => cardsRef.current[index] = el}
          >
            <div className='overlap-card-content'>
              <img className='overlap-card-img' src={card.img} alt={card.title} />
              <p className='overlap-card-title'>{card.title}</p>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default OverlappingCards;
