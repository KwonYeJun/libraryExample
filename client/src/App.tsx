import React, { useRef } from 'react';
import { motion } from 'framer-motion'
import './App.css';
import CustomCard from './Crad';
import ProjectPage from './projectPage'



function App() {
  const scrollRef = useRef(null);
  const emojiVariants = {
    hidden: { opacity: 0, y: 100, rotateY: 300 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        rotateY: {
          duration: 0.3
        },
        y: {
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.01,
          duration: 0.3
        }
      }
    }
  };


  return (

    <div className="App">


      <h1>This is Me ✨</h1>
      <div id="container" ref={scrollRef}>
    
        <ProjectPage />
    
      </div>
    </div>
  );
}

export default App;
