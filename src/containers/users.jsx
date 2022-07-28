import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { getUsersStoreSelector } from '../store/users/selectors';
import getUsersThunk from '../store/users/thunk/get-users';
import { Box } from '@chakra-ui/react';
import UsersTable from '../components/users/users-table';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import {
  setUsersLimitAction,
  setUsersPageAction,
  setUsersSearchAction,
} from '../store/users/actions';
import Pagination from '../components/pagination';
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';

const UsersContainer = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchString, setSearchString] = useState('');
  const { page, limit, search, users, status, total, filters } = useSelector(
    getUsersStoreSelector
  );
  console.log(location);
  console.log(page);
  const loading = status === 'running';

  // Invoke when user click to request another page.
  const handleChangePage = (page) => {
    navigate(`/users?page=${page}`);
  };
  const handleChangeLimit = (value) => {
    dispatch(setUsersLimitAction({ limit: Number(value) }));
  };
  const handleChangeSearch = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmitSearch = () => {
    dispatch(setUsersSearchAction({ search: searchString }));
  };

  useEffect(() => {
    dispatch(getUsersThunk(page, limit, search, filters));
  }, [dispatch, page, navigate, total, limit, search, filters]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log(params);
    const pageParam = parseInt(params.get('page'));
    const searchValue = String(params.get('search'));
    // if (searchValue) {
    //   dispatch(setUsersSearchAction({ search: searchValue }));
    // }
    if (pageParam) {
      dispatch(setUsersPageAction({ page: pageParam }));
    }
    //  else {
    //   dispatch(setUsersPageAction({ page: 1 }));
    // }
  }, [location.search, dispatch]);

  return (
    <div className='App'>
      <h2>Users page</h2>
      <Box>
        <Box width={300}>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={'text'}
              placeholder='Поиск'
              value={searchString}
              onChange={handleChangeSearch}
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  handleSubmitSearch();
                }
              }}
            />
            <InputRightElement width='2.5rem'>
              <IconButton
                aria-label='Add to friends'
                size={'md'}
                icon={<FiSearch />}
                onClick={() => {
                  handleSubmitSearch();
                }}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <UsersTable
          loading={loading}
          status={status}
          users={users}
          total={total}
        />
      </Box>
      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <Pagination
          page={page}
          total={total}
          size={limit}
          onChangePage={handleChangePage}
          onChangeLimit={handleChangeLimit}
        />
      </Box>
    </div>
  );
};

export default UsersContainer;
