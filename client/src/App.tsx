import React from 'react';
import { motion } from 'framer-motion'
import './App.css';
import CustomCard from './Crad';
import ReactPlayer from 'react-player'
import { Box } from './ThemeWrapper'



function App() {
  return (
    <div className="App">


      <div id='container'>
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ type: "spring", bounce: 0.25, stiffness: 50, velocity: 2 }}
          drag
          dragConstraints={{ left: 0, right: 1920 }}
          dragElastic={0.2}
          style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}
        />

        <motion.div
           animate={{ rotate: [-180,-120 ,-60 , 0] , x: [-400,-200,0]}}
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 40, damping: 10, velocity: 2 }}
        >
          <CustomCard
            image="/img/logo.png"
            title="Card Title"
            description="This is a card description."
            color="blue"
          />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ type: "spring", bounce: 0.25, stiffness: 50, velocity: 2 }}
          drag
          dragSnapToOrigin
          dragConstraints={{ left: 0, right: 200, top: -200, bottom: 200 }}
          dragElastic={0.2}
        >
          <CustomCard

            image="/img/logo.png"
            title="Card Title"
            description="This is a card description."
            color="green"
          />
        </motion.div>
        <Box />
      </div>
    </div>
  );
}

export default App;
