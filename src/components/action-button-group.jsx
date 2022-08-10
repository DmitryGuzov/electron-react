import React from 'react';
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  Button,
  IconButton,
} from '@chakra-ui/react';

const ActionButtonGroup = (props) => {
  return (
    <Box position='absolute' bottom='20px' right='20px'>
      <Flex flexDirection='column' alignItems='center'>
        {props.children}
      </Flex>
    </Box>
  );
};

export default ActionButtonGroup;
