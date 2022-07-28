import React from 'react';
import {
  Box,
  Table,
  Tr,
  Td,
  Th,
  Thead,
  TableContainer,
  Tbody,
  Tfoot,
  Spinner,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ServiceRoute } from '../../config/routes';

const ServicesTable = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (serviceId) => {
    navigate(ServiceRoute.format(serviceId));
  };

  return (
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Title</Th>
            <Th textAlign={'center'}>Price</Th>
            <Th textAlign={'center'}>Created at</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!props.loading &&
            props.services.length > 0 &&
            props.services.map((service) => {
              return (
                <Tr
                  key={service.id}
                  onClick={() => {
                    handleNavigate(service.id);
                  }}
                  _hover={{
                    backgroundColor: '#c2c2c2',
                  }}
                >
                  <Td>{service.id}</Td>
                  <Td>{service.title}</Td>
                  <Td textAlign={'center'}>{service.price}</Td>
                  <Td textAlign={'center'}>{service.createdAt}</Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={14} textAlign='center'>
              {!props.services ||
                (props.services?.length === 0 && 'Не знайдено')}
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
    </TableContainer>
  );
};
export default ServicesTable;
