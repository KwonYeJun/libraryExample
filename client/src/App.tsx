import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './App.css';
import CustomCard from './Crad';
import ProjectPage from './projectPage'
import MainPage from './mainPage'

function App() {
  const [showProjectPage, setShowProjectPage] = useState(false);
  const [test, settest] = useState(false);


  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log('Scroll position:', scrollPosition);
    if (scrollPosition > 0) {
      setShowProjectPage(false);
    } else{
      settest(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <h1>This is Me ✨</h1>
      <div id="container">
        {showProjectPage ? <ProjectPage /> : null}
        {test ? <MainPage /> : null}

      </div>
    </div>
  );
}

export default App;
