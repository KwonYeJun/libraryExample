import React from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CardProps> = ({ image, title, description }) => (
  <Box width={256}>
  <Card
    sx={{
      p: 1,
      borderRadius: 2,
      boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
    }}>
    <Image src={image} />
    <Box px={2}>
      <Heading as='h3'>
        Card Demo
      </Heading>
      <Text fontSize={0}>
        You can edit this code
      </Text>
    </Box>
  </Card>
</Box>

);

export default CustomCard;
