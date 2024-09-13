import axios, { AxiosResponse, AxiosError, AxiosInstance } from 'axios';

// Create an instance of axios with a custom config
const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Replace with your API base URL
  timeout: 10000, // Timeout if request takes longer than 10 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor (without authentication for now)
api.interceptors.request.use(
  config => {
    // const token = localStorage.getItem('token'); // Uncomment when you have token-based login
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle global response errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can customize global response handling here
    return response;
  },
  (error: AxiosError) => {
    // Uncomment when you want to handle unauthorized access (e.g., login redirects)
    // if (error.response?.status === 401) {
    //   console.error('Unauthorized access - perhaps redirect to login');
    // }
    return Promise.reject(error);
  }
);

export default api;
