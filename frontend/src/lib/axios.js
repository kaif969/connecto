import axios from 'axios';

export const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/',
=======
    baseURL: 'http://localhost:5000/api/',
>>>>>>> parent of d0f34ad2 (change in axios file)
    withCredentials: true,
    headers: {
    'Content-Type': 'application/json',
  },
});