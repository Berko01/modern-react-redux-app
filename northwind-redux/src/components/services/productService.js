import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchProductsFiltered = async (categoryId) => {
  const url = categoryId ? `${API_URL}?categoryId=${categoryId}` : API_URL;
  const response = await axios.get(url);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axios.post(API_URL, productData);
  return response.data;
};

export const updateProduct = async (productId, updatedData) => {
  const response = await axios.put(`${API_URL}/${productId}`, updatedData);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await axios.delete(`${API_URL}/${productId}`);
  return response.data;
};
