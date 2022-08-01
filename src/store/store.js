import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import carsReducer from './cars/reducer';
import eventsReducer from './event/reducer';
import servicesReducer from './services/reducer';
import usersReducer from './users/reducer';

export const rootReducer = combineReducers({
  authStore: {},
  usersStore: usersReducer,
  carsStore: carsReducer,
  servicesStore: servicesReducer,
  eventsStore: eventsReducer,
  //   authStore: authReducer,
  //   ordersStore: ordersReducer,
  //   orderStore: orderReducer,
  //   productsStore: productsReducer,
  //   productStore: productReducer,
  //   customersStore: customersReducer,
  //   cartStore: cartReducer,
  //   appStore: appReducer,
});

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
