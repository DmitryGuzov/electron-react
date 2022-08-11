import {
  CHANGE_SERVICES_SEARCH_PARAMS,
  DELETE_SERVICE,
  GET_SERVICE,
  GET_SERVICES,
  SET_SERVICES_STATUS,
} from './types';
import { initialState } from './store';

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return { ...state, ...action.payload };
    case SET_SERVICES_STATUS:
      return { ...state, status: action.payload };
    case GET_SERVICE:
      return { ...state, service: action.payload.service };
    case CHANGE_SERVICES_SEARCH_PARAMS:
      return { ...state, ...action.payload };
      case DELETE_SERVICE: 
      return {
        ...state, 
      }
    default:
      return state;
  }
};

export default servicesReducer;
