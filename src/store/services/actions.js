import {
  CHANGE_SERVICES_SEARCH_PARAMS,
  GET_SERVICE,
  GET_SERVICES,
  SET_SERVICES_STATUS,
} from './types';

export const getServicesAction = (data) => ({
  type: GET_SERVICES,
  payload: data,
});

export const getServiceAction = (data) => ({
  type: GET_SERVICE,
  payload: data,
});

export const setServicesStatus = (data) => ({
  type: SET_SERVICES_STATUS,
  payload: data,
});

export const changeServicesSearchParamsAction = (payload) => ({
  type: CHANGE_SERVICES_SEARCH_PARAMS,
  payload: payload,
});
