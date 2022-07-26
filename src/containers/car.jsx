import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CarDetails from '../components/car/car-details';
import { getCarsStoreSelector } from '../store/cars/selectors';
import getCarThunk from '../store/cars/thunk/get-car';
import Navbar from '../components/navbar';

function CarContainer() {
  const dispatch = useDispatch();
  const params = useParams();
  const { car, status } = useSelector(getCarsStoreSelector);
  const loading = status === 'running';
  useEffect(() => {
    dispatch(getCarThunk(params.carId));
  }, [dispatch, params.carId]);
  return (
    <Box padding={'10px'}>
      <Navbar />
      {loading && <>Loading...</>}
      {car && !loading && <CarDetails car={car} />}
    </Box>
  );
}

export default CarContainer;
