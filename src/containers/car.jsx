import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CarDetails from '../components/car/car-details';
import { getCarsStoreSelector } from '../store/cars/selectors';
import getCarThunk from '../store/cars/thunk/get-car';
import Navbar from '../components/navbar';
import Loading from '../components/loading';
import { Button } from '@chakra-ui/react';

function CarContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { car, status } = useSelector(getCarsStoreSelector);
  const loading = status === 'running';
  useEffect(() => {
    dispatch(getCarThunk(params.carId));
  }, [dispatch, params.carId]);
  return (
    <Box>
      <Navbar>
        <Button
          size='sm'
          m='2px 2px 2px 0'
          onClick={() => {
            navigate(`/cars/${car.id}/edit`);
          }}
        >
          Edit
        </Button>
        <Button size='sm' m='2px 2px 2px 0' onClick={() => {}}>
          Delete
        </Button>
      </Navbar>
      {loading && <Loading />}
      {car && !loading && <CarDetails car={car} />}
    </Box>
  );
}

export default CarContainer;
