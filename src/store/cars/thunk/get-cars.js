import CarsService from '../../../services/cars';
import { getCarsAction, setCarsStatus } from '../actions';

const getCarsThunk = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCarsStatus('running'));

      const response = await CarsService.getCars();
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
            // total: response.data.count,
          })
        );
      }
    } catch (error) {
      dispatch(setCarsStatus('error'));
    }
  };
};

export default getCarsThunk;
