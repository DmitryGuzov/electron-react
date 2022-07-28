import React from 'react';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai';

function AddCarForm() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
        <FormControl id='userName'>
          <FormLabel>User Icon</FormLabel>
          <Center>
            <Avatar
              size='xl'
              borderRadius={'2px'}
              width='100%'
              height='200px'
              src='https://bit.ly/sage-adebayo'
              alt='asdasdasdasdasd'
              loading='lazy'
            />
          </Center>
          <Stack direction={['column', 'row']} spacing={6}></Stack>
          <Center w='full'>
            <Button w='full'>Change Icon</Button>
          </Center>
        </FormControl>
        <FormControl id='userName' isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder='Name'
            _placeholder={{ color: 'gray.500' }}
            type='text'
          />
        </FormControl>
        <FormControl id='userName' isRequired>
          <FormLabel>Surname</FormLabel>
          <Input
            placeholder='Surname'
            _placeholder={{ color: 'gray.500' }}
            type='text'
          />
        </FormControl>
        <FormControl id='email' isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder='your-email@example.com'
            _placeholder={{ color: 'gray.500' }}
            type='email'
          />
        </FormControl>
        <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder='password'
            _placeholder={{ color: 'gray.500' }}
            type='password'
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w='full'
            _hover={{
              bg: 'red.500',
            }}
          >
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w='full'
            _hover={{
              bg: 'blue.500',
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default AddCarForm;
