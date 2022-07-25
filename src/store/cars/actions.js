import { GET_CAR, GET_CARS, SET_CARS_STATUS } from './types';

export const getCarsAction = (data) => ({
  type: GET_CARS,
  payload: data,
});

export const getCarAction = (data) => ({
  type: GET_CAR,
  payload: data,
});

export const setCarsStatus = (data) => ({
  type: SET_CARS_STATUS,
  payload: data,
});
