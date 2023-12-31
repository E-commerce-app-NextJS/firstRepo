import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const instance = axios.create({
  baseURL: apiUrl,
});
// here to make manage account user and dashboard seller and admin, payment.
export const fetchProducts = async (token: string) => {
  try {
    const response = await instance.get('/products/', {
      headers: { Authorization: `Bearer ${token}` }, 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

