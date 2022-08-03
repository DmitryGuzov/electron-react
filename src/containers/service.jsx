import React, { useState } from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import ServiceDetails from '../components/service/service-details';
import Navbar from '../components/navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import deleteServiceThunk from '../store/services/thunk/delete-service';
import Alert from '../components/alert';

function ServiceContainer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const [isDeleting, setDeleting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    setDeleting(true);
    dispatch(deleteServiceThunk(params.serviceId, navigate));
  };
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
      <ServiceDetails />
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

export default ServiceContainer;
