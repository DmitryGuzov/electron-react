import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import AddServiceForm from '../components/add-service-form';

function EditServiceContainer() {
  return (
    <Box padding={'10px'}>
      <Navbar />
      <AddServiceForm />
    </Box>
  );
}

export default EditServiceContainer;
