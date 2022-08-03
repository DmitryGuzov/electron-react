import ServicesService from '../../../services/services';
import { getServicesAction, setServicesStatus } from '../actions';

const deleteServiceThunk = (serviceId, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setServicesStatus('running'));

      const response = await ServicesService.deleteService(serviceId);

      if (response.status === 200) {
        dispatch(setServicesStatus('success'));
        console.log('response: ', response);
        navigate(-1);
      }
    } catch (error) {
      dispatch(setServicesStatus('error'));
    }
  };
};

export default deleteServiceThunk;
