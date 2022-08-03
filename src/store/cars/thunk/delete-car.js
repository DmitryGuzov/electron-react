import CarsService from '../../../services/cars';
import { setCarsStatus } from '../actions';

const deleteCarThunk = (carId, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCarsStatus('running'));

      const response = await CarsService.deleteCar(carId);
      console.log('response: ', response);
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200) {
        dispatch(setCarsStatus('success'));
        navigate(-1);
      }
    } catch (error) {
      dispatch(setCarsStatus('error'));
    }
  };
};

export default deleteCarThunk;
