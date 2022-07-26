import React from 'react';
import {
  Box,
  TableContainer,
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
  Tfoot,
  Spinner,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { CarRoute } from '../../config/routes';
import { useDispatch } from 'react-redux';
import { getCarAction } from '../../store/cars/actions';

const CarsTable = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (car) => {
    dispatch(getCarAction({ car: car }));
    navigate(CarRoute.format(car.id));
  };

  return (
    <Table size='sm'>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Brand</Th>
          <Th>Model</Th>
          <Th textAlign={'center'}>Number</Th>
          <Th textAlign={'center'}>Price</Th>
          <Th textAlign={'center'}>Created at</Th>
        </Tr>
      </Thead>
      <Tbody>
        {!props.loading &&
          props.cars.length > 0 &&
          props.cars.map((car) => {
            return (
              <Tr
                key={car.id}
                onClick={() => {
                  handleNavigate(car);
                }}
                _hover={{
                  backgroundColor: '#c2c2c2',
                }}
              >
                <Td>{car.id}</Td>
                <Td>{car.brand}</Td>
                <Td>{car.model}</Td>
                <Td textAlign={'center'}>{car.number ?? ' - '}</Td>
                <Td textAlign={'center'}>{car.price}</Td>
                <Td textAlign={'center'}>{car.createdAt}</Td>
              </Tr>
            );
          })}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th colSpan={14} textAlign='center'>
            {!props.cars || (props.cars?.length === 0 && 'Не знайдено')}
            {props.loading && (
              <Box
                display={'flex'}
                height={'60px'}
                width={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Spinner color='pink.300' />
              </Box>
            )}
          </Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default CarsTable;
