import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box padding={2} borderRadius={5} backgroundColor='#21252b'>
      <Flex justifyContent='space-between' alignItems='center' flexWrap='wrap'>
        <Box>
          <Button onClick={handleBack} size={'sm'}>
            Back
          </Button>
        </Box>
        <Box>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
          >
            {props.children}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
