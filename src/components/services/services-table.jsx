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
  Badge,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ServiceRoute } from '../../config/routes';
import moment from 'moment';

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
            <Th>Title</Th>
            <Th textAlign={'center'}>Location</Th>
            <Th textAlign={'center'}>Price</Th>
            <Th textAlign={'center'}>Type</Th>
            <Th textAlign={'center'}>Done</Th>
            <Th textAlign={'center'}>Remind at</Th>
            <Th textAlign={'center'}>Car</Th>
            <Th textAlign={'center'}>Date</Th>
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
                  <Td>{service.title}</Td>

                  {service.location ? (
                    <Td>{service.location}</Td>
                  ) : (
                    <Td textAlign={'center'}> - </Td>
                  )}
                  <Td textAlign={'center'}>{service.price}</Td>
                  <Td textAlign={'center'}>
                    {service.serviceType ? (
                      <Badge colorScheme={'blue'}>{service.serviceType}</Badge>
                    ) : (
                      ' - '
                    )}
                  </Td>
                  <Td textAlign={'center'}>
                    {service.isDone ? (
                      <Badge colorScheme={'green'}>Yes</Badge>
                    ) : (
                      <Badge colorScheme={'pink'}>No</Badge>
                    )}
                  </Td>
                  <Td textAlign={'center'}>
                    {service.serviceType === 'REMINDER'
                      ? service.remindAt
                        ? moment(service.remindAt).format('DD-MM-YYYY, THH:MM')
                        : ' - '
                      : ' - '}
                  </Td>
                  <Td>
                    {service.car.brand} {service.car.model}
                  </Td>
                  <Td textAlign={'center'}>
                    {moment(service.date).format('DD-MM-YYYY, THH:MM')}
                  </Td>
                  <Td textAlign={'center'}>
                    {moment(service.createdAt).format('DD-MM-YYYY, THH:MM')}
                  </Td>
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
