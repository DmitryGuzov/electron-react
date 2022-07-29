import {
  GET_CUSTOMERS,
  SET_USERS_LIMIT,
  SET_USERS_PAGE,
  SET_USERS_PARAMS,
  SET_USERS_SEARCH,
  SET_USERS_STATUS,
} from './types';

export const getUsersAction = (data) => ({
  type: GET_CUSTOMERS,
  payload: data,
});

export const setUsersStatus = (data) => ({
  type: SET_USERS_STATUS,
  payload: data,
});

export const setUsersPageAction = (payload) => ({
  type: SET_USERS_PAGE,
  payload: payload,
});

export const setUsersLimitAction = (payload) => ({
  type: SET_USERS_LIMIT,
  payload: payload,
});

export const setUsersSearchAction = (payload) => ({
  type: SET_USERS_SEARCH,
  payload: payload,
});
export const setUsersParamsAction = (payload) => ({
  type: SET_USERS_PARAMS,
  payload: payload,
});
