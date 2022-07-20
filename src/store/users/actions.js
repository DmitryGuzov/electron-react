import { GET_CUSTOMERS, SET_USERS_STATUS } from './types';

export const getUsersAction = (data) => ({
  type: GET_CUSTOMERS,
  payload: data,
});

export const setUsersStatus = (data) => ({
  type: SET_USERS_STATUS,
  payload: data,
});
