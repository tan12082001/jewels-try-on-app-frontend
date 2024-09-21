import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import userAuthReducer from './userAuth/userAuthSlice';
import userProfileReducer from './userProfile/userProfileSlice';

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    products: productsReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
