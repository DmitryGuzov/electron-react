import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { MdLocalShipping } from 'react-icons/md';
import ServiceCard from './service-card';

const ServicesTab = (props) => {
  return (
    <Box>
      <Flex direction={'column'}></Flex>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </Box>
  );
};

export default ServicesTab;
