import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

// to pass authorization jwt token to the request header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
