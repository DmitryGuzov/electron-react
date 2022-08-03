import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { Box } from '@chakra-ui/react';
import { getServicesStoreSelector } from '../store/services/selectors';
import getServicesThunk from '../store/services/thunk/get-services';
import ServicesTable from '../components/services/services-table';
import Pagination from '../components/pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { changeServicesSearchParamsAction } from '../store/services/actions';
import { FiSearch } from 'react-icons/fi';
import {
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Button,
  Flex,
} from '@chakra-ui/react';
import { AddServiceRoute } from '../config/routes';

const ServicesContainer = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { page, limit, search, services, status, total, filters } = useSelector(
    getServicesStoreSelector
  );

  const loading = status === 'running';

  const handleChangePage = (page) => {
    navigate(`/services?page=${page}`);
  };
  const handleChangeLimit = (value) => {
    dispatch(changeServicesSearchParamsAction({ limit: value }));
  };
  const handleChangeSearch = (event) => {};

  const handleAddServicePage = () => {
    navigate(AddServiceRoute);
  };

  useEffect(() => {
    dispatch(getServicesThunk(page, limit, search, filters));
  }, [dispatch, filters, limit, navigate, page, search, total]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log(params);
    const pageParam = parseInt(params.get('page'));
    const searchValue = String(params.get('search'));
    // if (searchValue) {
    //   dispatch(setUsersSearchAction({ search: searchValue }));
    // }
    if (pageParam) {
      // dispatch(setUsersPageAction({ page: pageParam }));
      dispatch(changeServicesSearchParamsAction({ page: pageParam }));
    }
    //  else {
    //   dispatch(setUsersPageAction({ page: 1 }));
    // }
  }, [location.search, dispatch]);
  return (
    <div className='App'>
      <h2>Services page</h2>
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
          Add Service
        </Button>
      </Flex>
      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <ServicesTable
          loading={loading}
          status={status}
          services={services}
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

export default ServicesContainer;
