import { GET_SERVICE, GET_SERVICES, SET_SERVICES_STATUS } from './types';
import { initialState } from './store';

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return { ...state, ...action.payload };
    case SET_SERVICES_STATUS:
      return { ...state, status: action.payload };
    case GET_SERVICE:
      return { ...state, service: action.service };
    default:
      return state;
  }
};

export default servicesReducer;
