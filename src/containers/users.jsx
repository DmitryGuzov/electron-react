import React, { useEffect, useState, useMemo } from 'react';
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
  Button,
  Flex,
} from '@chakra-ui/react';
import UsersFilters from '../components/users/user-filters';

const UsersContainer = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchString, setSearchString] = useState('');
  const { page, limit, search, users, status, total, filters } = useSelector(
    getUsersStoreSelector
  );
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
  const handleAddServicePage = () => {
    navigate('/users/add');
  };

  const pageCount = useMemo(() => {
    if (total && limit) {
      return Math.ceil(total / limit);
    } else {
      return 1;
    }
  }, [total, limit]);

  useEffect(() => {
    if (page > pageCount) {
      navigate('/users?page=1');
    }
  }, [page, pageCount, navigate]);

  useEffect(() => {
    dispatch(getUsersThunk(page, limit, search, filters));
  }, [dispatch, page, navigate, limit, search, filters]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = parseInt(params.get('page'));
    const searchValue = String(params.get('search'));

    if (pageParam) {
      dispatch(setUsersPageAction({ page: pageParam }));
    }
  }, [location.search, dispatch]);

  return (
    <div className='App'>
      <h2>Users page</h2>
      <Flex justifyContent='space-between' alignItems='center' px={'10px'}>
        <Box width={300}>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={'text'}
              placeholder='Поиск'
              onChange={handleChangeSearch}
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  // handleSubmitSearch();
                }
              }}
            />
            <InputRightElement width='2.5rem'>
              <IconButton
                aria-label='Add to friends'
                size={'sm'}
                icon={<FiSearch />}
                onClick={() => {
                  // handleSubmitSearch();
                }}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Button size='sm' onClick={handleAddServicePage}>
          Add User
        </Button>
      </Flex>
      <UsersFilters />
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
