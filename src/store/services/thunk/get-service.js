import ServicesService from '../../../services/services';
import { getServiceAction, setServicesStatus } from '../actions';

const getServiceThunk = (serviceId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setServicesStatus('running'));

      const response = await ServicesService.getService(serviceId);
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(setServicesStatus('success'));
        dispatch(
          getServiceAction({
            service: response.data.service,
          })
        );
      }
    } catch (error) {
      dispatch(setServicesStatus('error'));
    }
  };
};

export default getServiceThunk;
