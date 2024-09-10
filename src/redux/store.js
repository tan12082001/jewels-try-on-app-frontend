import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import userAuthReducer from './userAuth/userAuthSlice';

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    products: productsReducer,
  },
});

export default store;
