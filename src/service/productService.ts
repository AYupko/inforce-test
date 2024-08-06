import axios from 'axios';
import { Product } from '../types/types';

const API_URL = 'http://localhost:5000/products';

export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addProduct = async (newProduct: Product) => {
    const response = await axios.post(API_URL, newProduct);
    return response.data;
};

export const deleteProduct = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log('Product deleted successfully');
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};