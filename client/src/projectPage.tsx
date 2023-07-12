
import { motion } from 'framer-motion'
import CustomCard from './Crad';
import { Box } from './ThemeWrapper'


function ProjectPage() {

  return (
    <>
      <motion.a
        animate={{ rotate: [-180, -120, -60, 0], x: [-400, -200, 0] }}
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/logo.png"
          title="Card Title"
          description="This is a card description."
          color="blue"
        />
      </motion.a>
      <motion.a
        animate={{ rotate: [-180, -120, -60, 0], x: [-400, -200, 0], y: [-400, -200, 0], z: [-400, -200, 0] }}
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/logo.png"
          title="Card Title"
          description="This is a card description."
          color="green"
        />
      </motion.a>
      <motion.a
        animate={{ rotate: [180, 120, 60, 0], x: [400, 200, 0], y: [400, 200, 0], z: [400, 200, 0] }}
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2, }}
      >
        <CustomCard
          image="/img/logo.png"
          title="Card Title"
          description="This is a card description."
          color="yellow"
        />
      </motion.a>
      <motion.a
        animate={{ rotate: [180, 120, 60, 0], x: [400, 200, 0] }}
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
      >
        <CustomCard
          image="/img/logo.png"
          title="Card Title"
          description="This is a card description."
          color="pink"
        />
      </motion.a>
      <Box />
    </>
  );
}

export default ProjectPage;
