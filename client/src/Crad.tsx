import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';

interface CardProps {
  image: string;
  title: string;
  description: string;
  color:string;
}

const CustomCard: React.FC<CardProps> = ({ image, title, description ,color}) => (
  <Box width={256} style={{display: 'flex'    , flexDirection: "column"}}>
  <Image src={image} style={{height: '150px' ,width: '150px',  marginBottom:" -30px" , zIndex: "2"}} />
  <Card
    sx={{
      p: 10,
      borderRadius: 5,
      boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      background: `linear-gradient(to right,${color}, #FFFFFF)`
      // backgroundColor:`${color}`
    }}
 style={{  width: '100%'}}
    >
    <Box px={2} pt={5}>
      <Heading as='h3'>
        {title}
      </Heading>
      <Text fontSize={0}>
        {description}
      </Text>
    </Box>
  </Card>
</Box>

);

export default CustomCard;
