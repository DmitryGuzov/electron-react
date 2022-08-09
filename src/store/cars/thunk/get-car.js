import CarsService from '../../../services/cars';
import { getCarAction, setCarsStatus } from '../actions';

const getCarThunk = (carId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setCarsStatus('running'));

      const response = await CarsService.getCar(carId);
      console.log('response: ', response);
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data.car);
        dispatch(setCarsStatus('success'));
        dispatch(
          getCarAction({
            car: response.data.car,
          })
        );
      }
    } catch (error) {
      dispatch(setCarsStatus('error'));
    }
  };
};

export default getCarThunk;
