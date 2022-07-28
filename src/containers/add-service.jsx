import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import AddServiceForm from '../components/add-service-form';

function AddServiceContainer() {
  return (
    <Box padding={'10px'}>
      <Navbar />
      <AddServiceForm />
    </Box>
  );
}

export default AddServiceContainer;
