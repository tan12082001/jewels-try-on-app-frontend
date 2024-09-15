import axios from 'axios';
import { getProducts } from './products/productsSlice';
import { clearUser } from './userAuth/userAuthSlice';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await api.get('/category/jewelery');
    dispatch(getProducts(response.data));
  } catch (error) {
    console.error('Error fetching products: ', error);
  }
};

export const logOutUser = () => async (dispatch) => {
  try {
  // i need to add the api call for logging out using axios but as of now
  // there is no backend so just updating the state.
  // await axios.delete('/logout');
    dispatch(clearUser());
  } catch (error) {
    console.error('Error logging out user: ', error);
  }
};

export default api;
