import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import AddUserForm from '../components/add-user-form';

function AddUserContainer() {
  return (
    <Box padding={'10px'}>
      <Navbar />
      <AddUserForm />
    </Box>
  );
}

export default AddUserContainer;
