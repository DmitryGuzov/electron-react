import { GET_CUSTOMERS, SET_USERS_STATUS } from './types';
import { initialState } from './store';

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return { ...state, ...action.payload };

    case SET_USERS_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export default usersReducer;
