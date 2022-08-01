import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import AddCarForm from '../components/add-car-form';

function EditCarContainer() {
  return (
    <Box padding={'10px'}>
      <Navbar />
      <AddCarForm />
    </Box>
  );
}

export default EditCarContainer;
