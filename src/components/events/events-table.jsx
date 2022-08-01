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
} from '@chakra-ui/react';
import Loading from '../../components/loading';
import { useNavigate } from 'react-router-dom';
import { ServiceRoute } from '../../config/routes';

const EventsTable = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (serviceId) => {};

  return (
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Code</Th>
            <Th textAlign={'center'}>Title</Th>
            <Th textAlign={'center'}>Created at</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!props.loading &&
            props.events.length > 0 &&
            props.events.map((event) => {
              return (
                <Tr
                  key={event.id}
                  onClick={() => {
                    handleNavigate(event.id);
                  }}
                  _hover={{
                    backgroundColor: '#c2c2c2',
                  }}
                >
                  <Td>{event.code}</Td>
                  <Td textAlign={'center'}>{event.code + '-title'}</Td>
                  <Td textAlign={'center'}>{event.createdAt}</Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={14} textAlign='center'>
              {!props.events || (props.events?.length === 0 && 'Не знайдено')}
              {props.loading && (
                <Box
                  display={'flex'}
                  height={'60px'}
                  width={'100%'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Loading />
                </Box>
              )}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
export default EventsTable;
