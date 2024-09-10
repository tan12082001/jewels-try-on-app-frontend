import axios from 'axios';
import { getProducts } from './products/productsSlice';

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

export default api;
