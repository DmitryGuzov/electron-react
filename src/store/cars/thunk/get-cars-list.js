import CarsService from '../../../services/cars';
import { getCarsListAction, setCarsStatus } from '../actions';

const getCarsListThunk = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCarsStatus('running'));
      const response = await CarsService.getCarsList();

      if (response.status === 200 || response.status === 201) {
        dispatch(setCarsStatus('success'));
        dispatch(
          getCarsListAction({
            carsList: response.data.cars,
          })
        );
      }
    } catch (error) {
      dispatch(setCarsStatus('error'));
    }
  };
};

export default getCarsListThunk;
