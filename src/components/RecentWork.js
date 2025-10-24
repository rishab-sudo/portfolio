import React, { useEffect, useRef } from 'react';
import './RecentWork.css';
import { Container } from 'react-bootstrap';

const RecentWork = () => {
  const cardsRef = useRef([]);

  // 👉 Card data (You can add more easily)
  const cardData = [
    {
      id: 1,
      img: require("../assets/projects/1.png"),
      title: "Custom Clothing E-Commerce Platform",
      description:
        "Successfully developed a fully functional e-commerce platform for a custom clothing brand, featuring personalized product options and a seamless shopping experience."
    },
    {
      id: 2,
      img: require("../assets/projects/2.png"),
      title: "Modern E-Commerce Website",
      description:
        "Designed and delivered a responsive e-commerce website with advanced filtering, cart, and checkout functionality to enhance user engagement."
    },
    {
      id: 3,
      img: require("../assets/projects/3.png"),
      title: "Marketing Agency Website",
      description:
        "Created an elegant and user-friendly marketing agency website that effectively showcases services, portfolios, and client success stories."
    },
    {
      id: 4,
      img: require("../assets/projects/4.png"),
      title: "Architectural Branding Website",
      description:
        "Successfully completed a professional architectural branding website that reflects brand identity with modern design aesthetics and smooth navigation."
    },
    {
      id: 5,
      img: require("../assets/projects/5.png"),
      title: "Architecture Firm E-Commerce Website",
      description:
        "Developed a visually rich architecture firm website showcasing projects, services, and portfolios through a clean and structured layout."
    },
    {
      id: 6,
      img: require("../assets/projects/6.png"),
      title: "Software Branding Website",
      description:
        "Delivered a professional software branding website featuring efficient content management, a modern UI, and smooth performance across all devices."
    },
    {
      id: 7,
      img: require("../assets/projects/7.png"),
      title: "Educational Institute Website",
      description:
        "Built a functional and visually appealing educational institute website designed to highlight courses, faculty, and student success stories."
    },
    {
      id: 8,
      img: require("../assets/projects/8.png"),
      title: "Lighting Brand Website",
      description:
        "Developed a clean and visually striking website for a lighting brand, showcasing premium products with interactive galleries and brand storytelling."
    },
    {
      id: 9,
      img: require("../assets/projects/9.png"),
      title: "Fully Customized Web Application",
      description:
        "Created a professional and scalable custom web application tailored to client requirements with a user-centric interface and optimized performance."
    },
    {
      id: 10,
      img: require("../assets/projects/10.png"),
      title: "Corporate Branding Web Application",
      description:
        "Successfully delivered a corporate branding web application featuring a sleek interface, scalable architecture, and integrated management tools."
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
    <div  >
      <Container fluid className='stack-section' id="recentWork">
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
    </div>
  );
};

export default RecentWork;
