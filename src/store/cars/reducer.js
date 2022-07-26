import { GET_CAR, GET_CARS, SET_CARS_STATUS } from './types';
import { initialState } from './store';

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return { ...state, ...action.payload };
    case SET_CARS_STATUS:
      return { ...state, status: action.payload };
    case GET_CAR:
      return { ...state, car: action.payload.car };
    default:
      return state;
  }
};

export default carsReducer;
