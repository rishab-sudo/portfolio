import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; // ✅ Import AOS CSS
import AOS from 'aos';     // ✅ Import AOS JS

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Advantage from './components/Advantage';
import Worked from './components/Education';
import RecentWork from "./components/RecentWork";
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      offset: 100,    // Trigger offset from viewport
      once: true,     // Animation runs only once
      easing: 'ease-in-out', // Smooth transition
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        {/* Add AOS attributes to animate sections */}
        <div data-aos="fade-up">
          <Advantage />
        </div>
        <div data-aos="fade-up">
          <Worked />
        </div>
        <div data-aos="fade-up">
          <RecentWork />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
