import axios from 'axios';

export const API_BASE_URL = 'https://api.parekhchamber.com/api';
export const IMAGE_BASE_URL = 'https://api.parekhchamber.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export const blogApi = {
  getAll: (siteId) => api.get(`/blogs?siteId=${siteId}`),
};

export const careerApi = {
  getAll: (siteId) => api.get(`/careers?siteId=${siteId}`),
};

export const eventApi = {
  getAll: (siteId) => api.get(`/media-events?siteId=${siteId}`),
};

export default api;
