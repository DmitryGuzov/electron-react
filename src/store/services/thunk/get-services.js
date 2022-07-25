import ServicesService from '../../../services/services';
import {
  getServicesAction,
  getServiceAction,
  setServicesStatus,
} from '../actions';

const getServicesThunk = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setServicesStatus('running'));

      const response = await ServicesService.getServices();
      console.log(response);
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(setServicesStatus('success'));
        dispatch(
          getServicesAction({
            services: response.data.services,
            // total: response.data.count,
          })
        );
      }
    } catch (error) {
      dispatch(setServicesStatus('error'));
    }
  };
};

export default getServicesThunk;
