import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app/App.css';
import { Box } from '@chakra-ui/react';
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

  useEffect(() => {
    dispatch(getCarsThunk(page, limit, search, filters));
  }, [dispatch, page, limit, search, filters]);
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
      <Box overflowX={'auto'} margin='20px 0 20px 0'>
        <Pagination
          page={page}
          total={total}
          size={limit}
          onChangePage={handleChangePage}
          // onChangeLimit={handleChangeLimit}
        />
      </Box>
    </div>
  );
};

export default CarsContainer;
