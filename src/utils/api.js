import axios from 'axios';

const getApiBaseUrl = () => {
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:2000/api';
  }
  return 'https://api.parekhchamber.com/api';
};

const getImageBaseUrl = () => {
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:2000';
  }
  return 'https://api.parekhchamber.com';
};

export const API_BASE_URL = getApiBaseUrl();
export const IMAGE_BASE_URL = getImageBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productApi = {
  getAll: (siteId) => api.get(`/product?siteId=${siteId}`),
};

export const blogApi = {
  getAll: (siteId) => api.get(`/blogs?siteId=${siteId}`),
  getHeader: (siteId) => api.get(`/blog-header/${siteId}`),
  getById: (id) => api.get(`/blogs/${id}`),
};

export const careerApi = {
  getAll: (siteId) => api.get(`/careers?siteId=${siteId}`),
  getHeader: (siteId) => api.get(`/career-header/${siteId}`),
};

export const circularApi = {
  getAll: (siteId) => api.get(`/circulars?siteId=${siteId}`),
  getHeader: (siteId) => api.get(`/circular-header/${siteId}`),
};

export const eventApi = {
  getAll: (siteId) => api.get(`/media-events?siteId=${siteId}`),
};

export const managementApi = {
  getContent: (siteId) => api.get(`/management/content?siteId=${siteId}`),
  getMembers: (siteId) => api.get(`/management/members?siteId=${siteId}`),
};

export const equotationApi = {
  getHeader: (siteId) => api.get(`/equotation-header/${siteId}`),
  getAll: (siteId) => api.get(`/equotations?siteId=${siteId}`),
};

export const eauctionApi = {
  getHeader: (siteId) => api.get(`/eauction-header/${siteId}`),
  getAll: (siteId) => api.get(`/eauctions?siteId=${siteId}`),
};

export const tenderApi = {
  getHeader: (siteId) => api.get(`/tender-header/${siteId}`),
  getAll: (siteId) => api.get(`/tenders?siteId=${siteId}`),
};

export default api;
