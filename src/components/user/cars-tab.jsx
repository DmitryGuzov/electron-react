import React from 'react';
import CarCard from './car-card';
import { Box, Flex } from '@chakra-ui/react';

const CarsTab = (props) => {
  return (
    <Box>
      <Flex direction={'column'}></Flex>
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </Box>
  );
};

export default CarsTab;
