import ServicesService from '../../../services/services';
import { getServicesAction, setServicesStatus } from '../actions';

const getServicesThunk = (page, limit, search, filters) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setServicesStatus('running'));

      const skip = (page - 1) * limit;
      const response = await ServicesService.getServices(
        skip,
        limit,
        search,
        filters
      );
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 1000);
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(setServicesStatus('success'));
        console.log('response: ', response);
        dispatch(
          getServicesAction({
            services: response.data.services,
            total: response.data.total,
          })
        );
      }
    } catch (error) {
      dispatch(setServicesStatus('error'));
    }
  };
};

export default getServicesThunk;
