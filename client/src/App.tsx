import React from 'react';
import { motion } from 'framer-motion'
import './App.css';
import CustomCard from './Crad';
import ReactPlayer from 'react-player'
import ToggleContent from './ThemeWrapper'



function App() {
  return (
    <div className="App">
      <ReactPlayer
        url={"../videos/test.mp4"}
        width="1920px"
        height="1080px"
        loop={true}
        playing={true}
        muted={true}
        controls={false}
        style={{ position: 'absolute', zIndex: -1, pointerEvents: 'none' , filter: "blur(2.5px)",  backgroundSize: "cover"
        ,backgroundPosition: "center"}}
      />

      <div id='container'>
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ type: "spring", bounce: 0.25, stiffness: 50, velocity: 2 }}
          drag
          dragConstraints={{ left: 0, right: 1920 }}
          dragElastic={0.2}
          style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}
        />
        <motion.div onHoverStart={() => console.log('Hover starts')} style={{ backgroundColor: 'pink', width: '300px', height: '300px' }} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ type: "spring", bounce: 0.25, stiffness: 50, velocity: 2 }}
          drag
          dragConstraints={{ left: 0, right: 200, top: -200, bottom: 200 }}
          dragElastic={0.2}
        >
          <CustomCard
            image="/img/logo.png"
            title="Card Title"
            description="This is a card description."
          />
        </motion.div>
      
      </div>
    </div>
  );
}

export default App;
