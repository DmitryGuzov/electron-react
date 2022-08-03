import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { Box } from '@chakra-ui/react';
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
import { getEventsStoreSelector } from '../store/event/selectors';
import getEventsThunk from '../store/event/thunk/get-events';
import EventsTable from '../components/events/events-table';
import { changeEventsSearchParamsAction } from '../store/event/actions';

const EventsContainer = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { page, limit, search, events, status, total, filters } = useSelector(
    getEventsStoreSelector
  );

  const loading = status === 'running';

  const handleChangePage = (page) => {
    navigate(`/events?page=${page}`);
  };
  const handleChangeLimit = (value) => {
    dispatch(changeServicesSearchParamsAction({ limit: value }));
  };
  const handleChangeSearch = (event) => {};

  const handleAddServicePage = () => {
    // navigate(AddServiceRoute);
  };

  useEffect(() => {
    dispatch(getEventsThunk(page, limit, search, filters));
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
      dispatch(changeEventsSearchParamsAction({ page: pageParam }));
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
        <EventsTable
          loading={loading}
          status={status}
          events={events}
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

export default EventsContainer;
