import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import ServiceDetails from '../components/service/service-details';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function ServiceContainer(props) {
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar>
        <Button
          size='sm'
          m='2px 2px 2px 0'
          onClick={() => {
            navigate(`/services/asdasdasd/edit`);
          }}
        >
          Edit
        </Button>
        <Button size='sm' m='2px 2px 2px 0' onClick={() => {}}>
          Delete
        </Button>
      </Navbar>
      <ServiceDetails />
    </Box>
  );
}

export default ServiceContainer;
