import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='100%'
    >
      <Spinner color='black' />
    </Flex>
  );
};

export default Loading;
