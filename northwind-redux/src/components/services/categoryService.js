import axios from 'axios';

export const fetchCategories = async () => {
  const response = await axios.get('http://localhost:3000/categories');
  return response.data;
};
