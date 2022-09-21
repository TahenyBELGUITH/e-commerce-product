import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_URL from '../api';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const initialState = {};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_PRODUCTS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export default productsReducer;
