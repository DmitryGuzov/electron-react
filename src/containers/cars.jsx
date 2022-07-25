import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { Box } from '@chakra-ui/react';
import { getCarsStoreSelector } from '../store/cars/selectors';
import getCarsThunk from '../store/cars/thunk/get-cars';
import CarsTable from '../components/cars/cars-table';

const CarsContainer = (props) => {
  const dispatch = useDispatch();

  const { total, cars, status } = useSelector(getCarsStoreSelector);

  const loading = status === 'running';
  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);
  return (
    <div className='App'>
      <h2>Cars page</h2>

      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <CarsTable
          loading={loading}
          status={status}
          cars={cars}
          total={total}
        />
      </Box>
    </div>
  );
};

export default CarsContainer;
