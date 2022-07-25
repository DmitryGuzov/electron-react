import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { Box } from '@chakra-ui/react';
import { getServicesStoreSelector } from '../store/services/selectors';
import getServicesThunk from '../store/services/thunk/get-services';
import ServicesTable from '../components/services/services-table';

const ServicesContainer = (props) => {
  const dispatch = useDispatch();

  const { total, services, status } = useSelector(getServicesStoreSelector);

  const loading = status === 'running';
  useEffect(() => {
    dispatch(getServicesThunk());
  }, [dispatch]);
  return (
    <div className='App'>
      <h2>Services page</h2>

      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <ServicesTable
          loading={loading}
          status={status}
          services={services}
          total={total}
        />
      </Box>
    </div>
  );
};

export default ServicesContainer;
