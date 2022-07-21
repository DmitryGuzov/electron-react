import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import EventList from './event-card';

function EventsTab(props) {
  return (
    <Box>
      <Flex direction={'column'}></Flex>
      <EventList />
    </Box>
  );
}

export default EventsTab;
