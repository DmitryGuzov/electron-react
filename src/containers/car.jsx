import React, { useEffect, useState } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CarDetails from '../components/car/car-details';
import { getCarsStoreSelector } from '../store/cars/selectors';
import getCarThunk from '../store/cars/thunk/get-car';
import Navbar from '../components/navbar';
import Loading from '../components/loading';
import { Button } from '@chakra-ui/react';
import { FiTrash } from 'react-icons/fi';
import { AiOutlineEdit } from 'react-icons/ai';
import Alert from '../components/alert';
import deleteCarThunk from '../store/cars/thunk/delete-car';

function CarContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDeleting, setDeleting] = useState(false);

  const params = useParams();
  const { car, status } = useSelector(getCarsStoreSelector);
  const loading = status === 'running';

  const handleDelete = () => {
    setDeleting(true);
    dispatch(deleteCarThunk(params.carId, navigate));
  };

  useEffect(() => {
    dispatch(getCarThunk(params.carId));
  }, [dispatch, params.carId]);
  return (
    <Box>
      <Navbar>
        <Button
          rightIcon={<AiOutlineEdit />}
          size='sm'
          colorScheme='green'
          variant='solid'
          mr={2}
        >
          Изменить
        </Button>
        <Button
          isLoading={isDeleting}
          loadingText='удаление'
          rightIcon={<FiTrash />}
          size='sm'
          colorScheme='pink'
          variant='solid'
          onClick={onOpen}
        >
          Удалить
        </Button>
      </Navbar>
      {loading && <Loading />}
      {!loading && car && <CarDetails car={car} />}
      <Alert
        title='Exit?'
        isOpen={isOpen}
        onOpen={onOpen}
        onSuccess={() => {
          onClose();
          handleDelete();
        }}
        onCancel={() => {
          onClose();
        }}
        onClose={onClose}
      ></Alert>
    </Box>
  );
}

export default CarContainer;
