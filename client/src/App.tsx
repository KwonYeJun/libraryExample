import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './App.css';
import CustomCard from './components/Crad';
import ProjectPage from './components/projectPage'
import MainPage from './components/mainPage'
import { Link } from "react-router-dom";
import {  Text, Flex } from 'rebass';
import { FaGithub } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";

import {
  Box,
  useColorMode,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon , ArrowRightIcon ,ArrowLeftIcon} from "@chakra-ui/icons";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === "light" ? "Dark" : "Light";
  const [isComponentVisible, setComponentVisible] = useState(false);

  const handleClick = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <div className="App">
      <div id="container">
        <header>
          <motion.div
            animate={{ x: [400, 200, 0] }}
            transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
          >
            <Box>
        <Text fontSize={"55px"}> This is Me ✨</Text>
            </Box>
            </motion.div>
            <motion.div
            animate={{ x: [-400, -200, 0] }}
            transition={{ type: "spring", stiffness: 20, damping: 10, velocity: 2 }}
          >
            <Link to="https://github.com/KwonYeJun" target="_blank" rel="noopener noreferrer">
            <Button colorScheme="gray" leftIcon={<FaGithub />}>
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
            icon={isComponentVisible === true ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            onClick={handleClick}
            aria-label="change components"
            variant="ghost"
          >
            {/* {!isComponentVisible &&   "Project "}
            {isComponentVisible &&   "Profile "} */}
          </IconButton>
          
          </motion.div>
        </header>
        <div className='mainLayou'>
        {!isComponentVisible &&  <MainPage /> }
        {isComponentVisible &&  <ProjectPage /> }
          {/* <ProjectPage /> */}
        
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
            White Mode & black Mode

          </IconButton>
        </footer>

      </div>
    </div>
  );
}

export default App;
