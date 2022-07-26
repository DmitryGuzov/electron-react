import React from 'react';
import { Box } from '@chakra-ui/react';
import ServiceDetails from '../components/service/service-details';
import Navbar from '../components/navbar';

function ServiceContainer() {
  return (
    <Box padding={'10px'}>
      <Navbar />
      <ServiceDetails />
    </Box>
  );
}

export default ServiceContainer;
