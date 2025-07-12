import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../categories/categorySlice';
import productReducer from '../products/productSlice.js'; 


export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});
