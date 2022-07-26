import React from 'react';
import { Box, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box padding={2} borderRadius={5} backgroundColor={'#21252b'}>
      <Wrap>
        <WrapItem>
          <Button onClick={handleBack}>Back</Button>
        </WrapItem>
        {props.children}
      </Wrap>
    </Box>
  );
};

export default Navbar;
