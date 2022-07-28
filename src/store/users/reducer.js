import {
  GET_CUSTOMERS,
  SET_USERS_LIMIT,
  SET_USERS_PAGE,
  SET_USERS_SEARCH,
  SET_USERS_STATUS,
} from './types';
import { initialState } from './store';

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return { ...state, ...action.payload };

    case SET_USERS_STATUS:
      return { ...state, status: action.payload };

    case SET_USERS_PAGE:
      return { ...state, page: action.payload.page };
    case SET_USERS_LIMIT:
      return {
        ...state,
        limit: action.payload.limit,
      };
    case SET_USERS_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return state;
  }
};

export default usersReducer;
