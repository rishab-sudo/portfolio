import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import { FaArrowUp } from 'react-icons/fa'; // ✅ Import arrow icon

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Advantage from './components/Advantage';
import Worked from './components/Education';
import RecentWork from "./components/RecentWork";
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: 'ease-in-out',
    });

    // Simulate 2.1 sec loading
    const timer = setTimeout(() => setLoading(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  // Show "Scroll to top" button when scrolled 300px down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
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

        {/* Scroll to Top Button */}
        {showScroll && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
