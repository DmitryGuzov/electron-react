import React from 'react';
import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box padding={2} borderRadius={5}>
      <Flex justifyContent='space-between' alignItems='center' flexWrap='wrap'>
        <Box>
          <IconButton onClick={handleBack} size={'sm'}>
            <IoIosArrowBack />
          </IconButton>
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
