import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  Badge,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Wrap,
  WrapItem,
  Avatar,
} from '@chakra-ui/react';

import { BsImage } from 'react-icons/bs';
import CarCharacteristics from './car-characteristics';

const CarDetails = ({ car }) => {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex flexDirection='column'>
          <Avatar
            borderRadius={'5px'}
            alt={'product image'}
            src={car?.img}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            icon={<BsImage fontSize='40px' />}
            loading='lazy'
            h={{ base: '100%', sm: '300px', lg: '400px' }}
          />
          <br />
          {car?.consumables.length && (
            <Box mb={5}>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Расходники
              </Text>

              <Wrap spacing={2}>
                {car?.consumables.map((breakdown) => {
                  return (
                    <WrapItem key={breakdown.id}>
                      <Badge variant='solid' colorScheme='teal'>
                        {breakdown.title}
                        {': '} {breakdown.value}
                      </Badge>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </Box>
          )}
          {car?.breakdowns.length > 0 && (
            <Box mb={5}>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Поломки
              </Text>

              <Wrap spacing={2}>
                {car?.breakdowns.map((breakdown) => {
                  return (
                    <WrapItem key={breakdown.id}>
                      <Badge variant='solid' colorScheme='red'>
                        {breakdown.title}
                      </Badge>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </Box>
          )}
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {car?.brand} {car?.model}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              {car?.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <CarCharacteristics characteristics={car} />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default CarDetails;
