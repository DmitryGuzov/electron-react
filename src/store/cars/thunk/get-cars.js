import CarsService from '../../../services/cars';
import { getCarsAction, setCarsStatus } from '../actions';

const getCarsThunk = (page, limit, search, filters) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCarsStatus('running'));
      const skip = (page - 1) * limit;
      const response = await CarsService.getCars(skip, limit, search, filters);
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(setCarsStatus('success'));
        dispatch(
          getCarsAction({
            cars: response.data.cars,
            total: response.data.total,
          })
        );
      }
    } catch (error) {
      dispatch(setCarsStatus('error'));
    }
  };
};

export default getCarsThunk;
