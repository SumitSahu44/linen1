import axios from 'axios';

const API_BASE_URL = 'https://api.parekhchamber.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export default api;
