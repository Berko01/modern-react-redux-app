import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get('http://localhost:3000/products'); // 🔁 API adresini kendi backend’ine göre düzenle
  return response.data;
};

export const fetchProductsFiltered = async (categoryId) => {
  let url = 'http://localhost:3000/products';
  if (categoryId) {
    url += `?categoryId=${categoryId}`;
  }

  const response = await axios.get(url);
  return response.data;
};
