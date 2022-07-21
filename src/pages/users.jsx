import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import SidebarWrapper from '../components/sidebar-wrapper';
import { getUsersStoreSelector } from '../store/users/selectors';
import getUsersThunk from '../store/users/thunk/get-users';
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
import { UserRoute } from '../config/routes';

const UsersPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (userId) => {
    navigate(UserRoute.format(userId));
  };

  const { total, users, status } = useSelector(getUsersStoreSelector);

  const loading = status === 'running';
  useEffect(() => {
    dispatch(getUsersThunk(0, 0, 0, ''));
  }, [dispatch]);
  return (
    <SidebarWrapper>
      <div className='App'>
        <h2>Users page</h2>

        <Box overflowX={'auto'} margin='20px 0 20px 0'>
          <Table variant={'striped'} size='sm'>
            <Thead>
              <Tr>
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
              </Tr>
            </Thead>
            <Tbody>
              {!loading &&
                users.length > 0 &&
                users.map((user) => {
                  return (
                    <Tr
                      key={user.id}
                      onClick={() => {
                        handleNavigate(user.id);
                      }}
                    >
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
                        {user.lastRenewalDate ?? ' - '}
                      </Td>
                      <Td textAlign='center'>
                        {user.nextRenewalDate ?? ' - '}
                      </Td>
                      <Td textAlign='center'>{user.totalPaid}</Td>
                      <Td textAlign='center'>{user.createdAt}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th colSpan={14} textAlign='center'>
                  {!users || (users?.length === 0 && 'Не знайдено')}
                  {loading && (
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
        </Box>
      </div>
    </SidebarWrapper>
  );
};

export default UsersPage;
