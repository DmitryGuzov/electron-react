import axios from 'axios';
import LocalStorageService from '../services/local-storage';

import CONFIG from '../config/config';

const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = LocalStorageService.getAccessToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },

  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/signin';
      LocalStorageService.clearTokens();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
