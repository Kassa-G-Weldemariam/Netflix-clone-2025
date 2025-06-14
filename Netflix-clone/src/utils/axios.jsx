import axios from 'axios';
const axiosInstance= axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstance;