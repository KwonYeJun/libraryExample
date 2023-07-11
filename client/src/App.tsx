import React from 'react';
import { motion } from 'framer-motion'
import './App.css';
import CustomCard from './test';
function App() {
  return (
    <div className="App">
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ type: "spring", bounce: 0.25, stiffness: 50, velocity: 2 }}
        drag
        dragConstraints={{ left: 0, right: 1920 }}
        dragElastic={0.2}
        style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}
      />
      <motion.div onHoverStart={() => console.log('Hover starts')}  style={{ backgroundColor: 'pink', width: '300px', height: '300px' }} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ type: "spring", bounce: 0.25, stiffness: 50, velocity: 2 }}
        drag
        dragConstraints={{ left: 0, right: 200 , top: -200 , bottom:200 }}
        dragElastic={0.2}
      >
        <CustomCard
          image="/img/logo.png"
          title="Card Title"
          description="This is a card description."
        />
      </motion.div>

    </div>
  );
}

export default App;
