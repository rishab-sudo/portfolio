import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./RecentWork.css";

const RecentWork = () => {
  const workItems = [
    { img: require("../assets/projects/alutuff.png"), title: "Project 1", desc: "Description of Project 1" },
    { img: require("../assets/projects/arora-lights.png"), title: "Project 2", desc: "Description of Project 2" },
    { img: require("../assets/projects/design-connect.png"), title: "Project 3", desc: "Description of Project 3" },
    { img: require("../assets/projects/fixitup.png"), title: "Project 4", desc: "Description of Project 4" },
    { img: require("../assets/projects/icanenergy.png"), title: "Project 5", desc: "Description of Project 5" },
    { img: require("../assets/projects/jm-edu.png"), title: "Project 6", desc: "Description of Project 6" },
    { img: require("../assets/projects/proxy-app.png"), title: "Project 7", desc: "Description of Project 7" },
    { img: require("../assets/projects/proxyy.png"), title: "Project 8", desc: "Description of Project 8" },
    { img: require("../assets/projects/reclamehub.png"), title: "Project 9", desc: "Description of Project 9" },
    { img: require("../assets/projects/shop.png"), title: "Project 10", desc: "Description of Project 10" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container fluid className="recent-work-container">
      <div className="worked-heading-div text-center">
        <p className="recent-work-title">Recent Work</p>
        <p className="recent-work-desc">
          Must explain to you how all this mistaken idea pleasure born and give you a complete account.
        </p>
      </div>

      <Container>
        <Slider {...settings} className="recent-work-slider">
          {workItems.map((item, index) => (
            <div key={index} className="work-card">
              <img src={item.img} alt={item.title} className="work-card-img" />
              <h5 className="work-card-title">{item.title}</h5>
              <p className="work-card-desc">{item.desc}</p>
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default RecentWork;
