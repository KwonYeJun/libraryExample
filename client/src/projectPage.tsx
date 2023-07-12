
import { motion } from 'framer-motion'
import CustomCard from './Crad';

import { Box, Card, Image, Heading, Text, Flex } from 'rebass';

function ProjectPage() {

  return (
    <>
   

        <motion.a
          animate={{ rotate: [-180, -120, -60, 0], x: [-400, -200, 0] }}
          className="box"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
        >
          <CustomCard
            image="/img/poke.png"
            title="Card Title"
            description="This is a card description."
            color="#FFD13D"
          />
        </motion.a>
        <motion.a
          animate={{ rotate: [-180, -120, -60, 0], x: [-400, -200, 0], y: [-400, -200, 0], z: [-400, -200, 0] }}
          className="box"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
        >
          <CustomCard
            image="/img/stock.png"
            title="Card Title"
            description="This is a card description."
            color="#71B8F5"
          />
        </motion.a>
        <motion.a
          animate={{ rotate: [180, 120, 60, 0], x: [400, 200, 0], y: [400, 200, 0], z: [400, 200, 0] }}
          className="box"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2, }}
        >
          <CustomCard
            image="/img/bts.png"
            title="Card Title"
            description="This is a card description."
            color="#FA8737"
          />
        </motion.a>
        <motion.a
          animate={{ rotate: [180, 120, 60, 0], x: [400, 200, 0] }}
          className="box"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
        >
          <CustomCard
            image="/img/monkey.png"
            title="Card Title"
            description="This is a card description."
            color="#CE5BDE"
          />
        </motion.a>
       
   
    </>
  );
}

export default ProjectPage;
