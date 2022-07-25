import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { getUsersStoreSelector } from '../store/users/selectors';
import getUsersThunk from '../store/users/thunk/get-users';
import { Box } from '@chakra-ui/react';
import UsersTable from '../components/users/users-table';

const UsersContainer = (props) => {
  const dispatch = useDispatch();

  const { total, users, status } = useSelector(getUsersStoreSelector);

  const loading = status === 'running';
  useEffect(() => {
    dispatch(getUsersThunk(0, 0, 0, ''));
  }, [dispatch]);
  return (
    <div className='App'>
      <h2>Users page</h2>

      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <UsersTable
          loading={loading}
          status={status}
          users={users}
          total={total}
        />
      </Box>
    </div>
  );
};

export default UsersContainer;
