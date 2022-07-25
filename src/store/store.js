import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import carsReducer from './cars/reducer';
import servicesReducer from './services/reducer';
import usersReducer from './users/reducer';
// import authReducer from './auth/reducer';
// import ordersReducer from './orders/reducer';
// import orderReducer from './order/reducer';
// import cartReducer from './cart/reducer';
// import productsReducer from './products/reducer';
// import customersReducer from './customers/reducer';
// import appReducer from './app/reducer';
// import productReducer from './product/reducer';

export const rootReducer = combineReducers({
  authStore: {},
  usersStore: usersReducer,
  carsStore: carsReducer,
  servicesStore: servicesReducer,
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
