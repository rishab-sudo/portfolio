import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Advantage from './components/Advantage';
import Worked from './components/Education';
import RecentWork from"./components/RecentWork"


function App() {

  return (
  
    <Router>
      <div className="App">
       
    <Navbar/>
 <Home/>
 <Advantage/>

 <Worked/>
 <RecentWork/>
      </div>
    </Router>

  );
}

export default App;
