import React, { useEffect, useState } from 'react';
import { Box, Button, Tooltip, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ServiceDetails from '../components/service/service-details';
import Navbar from '../components/navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import deleteServiceThunk from '../store/services/thunk/delete-service';
import Alert from '../components/alert';
import ActionButtonGroup from '../components/action-button-group';
import { HiOutlineCheck } from 'react-icons/hi';
import { TiCancel } from 'react-icons/ti';
import { getServicesStoreSelector } from '../store/services/selectors';
import getServiceThunk from '../store/services/thunk/get-service';

function ServiceContainer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const [isDeleting, setDeleting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { service } = useSelector(getServicesStoreSelector);

  const handleDelete = () => {
    setDeleting(true);
    dispatch(deleteServiceThunk(params.serviceId, navigate));
  };

  useEffect(() => {
    dispatch(getServiceThunk(params.serviceId));
  }, [dispatch, params.serviceId]);

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
      <ServiceDetails service={service} />
      <ActionButtonGroup>
        <Tooltip
          hasArrow
          label='Завершити'
          bg='gray.300'
          color='black'
          placement='left'
        >
          <Button size='sm' rounded='lg' mb='5px' colorScheme={'facebook'}>
            <HiOutlineCheck />
          </Button>
        </Tooltip>
        <Tooltip
          hasArrow
          label='Відмінити нагадування'
          bg='gray.300'
          color='black'
          placement='left'
        >
          <Button size='sm' rounded='lg' mb='5px' colorScheme={'messenger'}>
            <TiCancel />
          </Button>
        </Tooltip>
        <Tooltip
          hasArrow
          label='Завершити'
          bg='gray.300'
          color='black'
          placement='left'
        >
          <Button size='sm' rounded='lg' colorScheme={'teal'}>
            3
          </Button>
        </Tooltip>
      </ActionButtonGroup>
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
