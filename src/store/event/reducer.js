import {
  CHANGE_EVENTS_SEARCH_PARAMS,
  GET_EVENT,
  GET_EVENTS,
  SET_EVENTS_STATUS,
} from './types';
import { initialState } from './store';

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, ...action.payload };
    case SET_EVENTS_STATUS:
      return { ...state, status: action.payload };
    case GET_EVENT:
      return { ...state, service: action.service };
    case CHANGE_EVENTS_SEARCH_PARAMS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default eventsReducer;
