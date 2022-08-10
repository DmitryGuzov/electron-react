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
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UserRoute } from '../../config/routes';
import { BiTrashAlt } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import moment from 'moment';

const UsersTable = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (userId) => {
    navigate(UserRoute.format(userId));
  };
  return (
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Avatar</Th>
            <Th>Id</Th>
            <Th>Role</Th>
            <Th>Full name</Th>
            <Th>Email</Th>
            <Th>Email status</Th>
            <Th>Cars</Th>
            <Th>Services</Th>
            <Th>Events</Th>
            <Th>Invoices</Th>
            <Th>Subscription</Th>
            <Th>last Renewal Date</Th>
            <Th>next Renewal Date</Th>
            <Th textAlign={'center'}>total Paid</Th>
            <Th textAlign={'center'}>Created at</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!props.loading &&
            props.users.length > 0 &&
            props.users.map((user) => {
              return (
                <Tr
                  key={user.id}
                  onClick={() => {
                    handleNavigate(user.id);
                  }}
                  _hover={{
                    backgroundColor: '#c2c2c2',
                  }}
                >
                  <Td pt="0px" pb="0px" >
                    <Avatar size='sm' loading='lazy' src={user.img} pt="0px" pb="0px"></Avatar>
                  </Td>
                  <Td>{user.id}</Td>
                  <Td>{user.role}</Td>
                  <Td>
                    {user.name} {user.surname}
                  </Td>
                  <Td>{user.email}</Td>
                  <Td>{user.emailStatus}</Td>
                  <Td textAlign='center'>{user.cars.length}</Td>
                  <Td textAlign='center'>{user.services.length}</Td>
                  <Td textAlign='center'>{user.events.length}</Td>
                  <Td textAlign='center'>{user.invoices.length}</Td>
                  <Td textAlign='center'>
                    {user.isSubscribed ? 'Active' : 'Disactive'}
                  </Td>
                  <Td textAlign='center'>
                    {user.lastRenewalDate
                      ? moment(user.lastRenewalDate).format(
                          'DD-MM-YYYY, THH:MM'
                        )
                      : ' - '}
                  </Td>
                  <Td textAlign='center'>
                    {user.nextRenewalDate
                      ? moment(user.nextRenewalDate).format(
                          'DD-MM-YYYY, THH:MM'
                        )
                      : ' - '}
                  </Td>
                  <Td textAlign='center'>{user.totalPaid}</Td>
                  <Td textAlign='center'>
                    {moment(user.createdAt).format('DD-MM-YYYY, THH:MM')}
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        isActive={false}
                        as={IconButton}
                        aria-label='Options'
                        icon={<BsThreeDotsVertical />}
                        variant='outline'
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      />
                      <MenuList>
                        <MenuItem
                          icon={<BiTrashAlt />}
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          Удалить
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={15} textAlign='center'>
              {!props.users || (props.users?.length === 0 && 'Не знайдено')}
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

export default UsersTable;
