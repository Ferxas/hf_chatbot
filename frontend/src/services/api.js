import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;