import React from 'react';
import {motion} from 'framer-motion'
import './App.css';
import CustomCard from './test';
function App() {
  return (
    <div className="App">
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ type: "spring", bounce: 0.25 ,stiffness: 50, velocity: 2}}
        style={{backgroundColor: 'blue', width: '300px' , height: '300px' }}
      />
  <CustomCard
  image="/img/logo.png"
  title="Card Title"
  description="This is a card description."
/>
    </div>
  );
}

export default App;
