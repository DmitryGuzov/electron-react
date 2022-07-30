import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { Box, Flex, Button } from '@chakra-ui/react';
import { getCarsStoreSelector } from '../store/cars/selectors';
import getCarsThunk from '../store/cars/thunk/get-cars';
import CarsTable from '../components/cars/cars-table';
import Pagination from '../components/pagination';
import { useNavigate } from 'react-router-dom';

const CarsContainer = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { total, cars, status, page, search, limit, filters } =
    useSelector(getCarsStoreSelector);

  const loading = status === 'running';

  const handleChangePage = (page) => {
    navigate(`/services?page=${page}`);
  };

  const handleAddCarPage = () => {
    navigate('/cars/add');
  };

  useEffect(() => {
    dispatch(getCarsThunk(page, limit, search, filters));
  }, [dispatch, page, limit, search, filters]);
  return (
    <div className='App'>
      <h2>Cars page</h2>
      <Flex justifyContent='space-between' alignItems='center' px={'10px'}>
        <Box width={300}></Box>
        <Button size='sm' onClick={handleAddCarPage}>
          Add Car
        </Button>
      </Flex>
      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <CarsTable
          loading={loading}
          status={status}
          cars={cars}
          total={total}
        />
      </Box>
      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <Pagination
          page={page}
          total={total}
          size={limit}
          onChangePage={handleChangePage}
        />
      </Box>
    </div>
  );
};

export default CarsContainer;
