import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Wrap,
  WrapItem,
  Badge,
} from '@chakra-ui/react';

import { MdLocalShipping } from 'react-icons/md';
import { TbCalendar } from 'react-icons/tb';

const ServiceDetails = (props) => {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 12 }}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {props?.service?.title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              {props?.service?.price} USD
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}>
            <Text fontSize={'lg'}>{props?.service?.description}</Text>
            <Box>
              <Wrap spacing={2}>
                <WrapItem>
                  <Badge variant='solid' colorScheme='teal'>
                    Type : {props?.service?.serviceType}
                  </Badge>
                </WrapItem>
                <WrapItem>
                  <Badge variant='solid' colorScheme='teal'>
                    status : {props?.service?.isDone ? 'Done' : 'In progress'}
                  </Badge>
                </WrapItem>
              </Wrap>
            </Box>
            <Box>
              <List spacing={2}>
                <ListItem display='flex' alignItems='center'>
                  <TbCalendar />
                  <Text as={'span'} fontWeight={'bold'}>
                    remind:
                  </Text>
                  {props?.service?.remindAt}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Location:
                  </Text>
                  {props?.service?.location}
                </ListItem>
                <ListItem display='flex' alignItems='center'>
                  <TbCalendar />
                  <Text as={'span'} fontWeight={'bold'}>
                    Дата:
                  </Text>
                  {props?.service?.date}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Створено:
                  </Text>
                  {props?.service?.createdAt}
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ServiceDetails;
