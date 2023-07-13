import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';

import { motion } from 'framer-motion'
interface CardProps {
  image: string;
  title: string;
  description: string;
  color:string;
}

const CustomCard: React.FC<CardProps> = ({ image, title, description ,color}) => (
  <Box width={256} style={{display: 'flex' , flexDirection: "column",  alignItems: "center"}}>
  <Image src={image} style={{height: '150px' ,width: '150px',  marginBottom:" -30px" , zIndex: "2"}} />
  <Card
    sx={{
      p: 10,
      borderRadius: 5,
      boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      // backgroundImage: `linear-gradient(to right, ${color}, #FFFFFF), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 10px, rgba(0, 0, 0, 0.1) 20px, transparent 20px, transparent 30px)` 
      background: `linear-gradient(to right,${color}, #FFFFFF)`
      // backgroundColor:`${color}`
    }}
   
 style={{  width: '130%',height: "30vh"}}
    >
    <Box px={2} pt={5}>
      <Heading as='h3'>
        {title}
      </Heading>
      <Text fontSize={0}>
      <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
        >
        <div className="textH1 ">{description}</div>
        </motion.div>
        
      </Text>
    </Box>
  </Card>
</Box>

);

export default CustomCard;
