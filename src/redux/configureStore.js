import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './products/products';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
