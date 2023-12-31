import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './App.css';
import ProjectPage from './components/projectPage'
import MainPage from './components/mainPage'
import { Link } from "react-router-dom";
import {  Text, Flex } from 'rebass';
import { FaGithub } from "react-icons/fa";
import Juni from './juni'

import {
  Box,
  useColorMode,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon , ArrowRightIcon ,ArrowLeftIcon} from "@chakra-ui/icons";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === "light" ? "Dark" : "#E1E1E1";
  const [isComponentVisible, setComponentVisible] = useState(false);

  const handleClick = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <div className="App">
      <div id="container">
        <header>
        <Juni />
          <motion.div
            animate={{ x: [400, 200, 0] }}
            transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
          >
            <Box>
        <Text fontSize={"55px"} color={backgroundColor}> 
        {isComponentVisible === true ? "⚒️ Project ✏" : " This is Me ✨"} </Text>
            </Box>
            </motion.div>
            <motion.div
            animate={{ x: [-400, -200, 0] }}
            transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
          >
            <Link to="https://github.com/KwonYeJun" target="_blank" rel="noopener noreferrer">
            <Button colorScheme="gray" leftIcon={<FaGithub />} color={backgroundColor}>
              KwonYeJun
            </Button>
          </Link>

          
          </motion.div>
          <motion.div
            animate={{ x: [-400, -200, 0] }}
            transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
          >
              <IconButton
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            color={backgroundColor}
            icon={isComponentVisible === true ? <ArrowLeftIcon /> : <ArrowRightIcon />}
            onClick={handleClick}
            aria-label="change components"
            variant="ghost"
          >
          </IconButton>
          
          </motion.div>
        </header>
        <div className='mainLayou'>
        {!isComponentVisible &&  <MainPage /> }
        {isComponentVisible &&  <ProjectPage /> }
        
        </div >
        <footer>
 

          <IconButton
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            icon={colorMode === "light" ?  <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            variant="ghost"
          >
          </IconButton>
        </footer>

      </div>
    </div>
  );
}

export default App;
