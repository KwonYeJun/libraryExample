
import { motion } from 'framer-motion'
import CustomCard from './Crad';

import { Box, Card, Image, Heading, Text, Flex } from 'rebass';

function MainPage() {

  return (
    <>
         <motion.div
        animate={{  y: [-400, -200, 0] }}
        className="box"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/navy.jpg"
          title="Who is Kwon Yejun?"
          description="This is a card description."
          color="#7677F5"
        />
      </motion.div>

      <motion.div
        animate={{  y: [-400, -200, 0] }}
        className="box"
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/green.jpg"
          title="Card Title"
          description="This is a card description."
          color="#5BDE5D"
        />
      </motion.div>
        
    </>
  );
}

export default MainPage;
