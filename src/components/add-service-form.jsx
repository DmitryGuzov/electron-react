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
  Select,
} from '@chakra-ui/react';

function AddServiceForm() {
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
        maxW={'xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Add Service
        </Heading>
        <FormControl id='userName' isRequired>
          <FormLabel>Оберіть авто</FormLabel>
          <Select placeholder='Оберіть авто'>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
            <option value='option1'>Option 1</option>
          </Select>
        </FormControl>
        <FormControl id='userName' isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder='Name'
            _placeholder={{ color: 'gray.500' }}
            type='text'
          />
        </FormControl>
        <FormControl id='userName' isRequired>
          <FormLabel>Description</FormLabel>
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

export default AddServiceForm;
