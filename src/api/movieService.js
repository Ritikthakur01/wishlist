import axios from 'axios';
import BASE_URL from '../utils/config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const movieService = {
  async fetchMovies() {
    try {
      const response = await axiosInstance.get('/wishlist/getWishlists');
      console.log("responseresponseresponseresponse",response)
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  },

  async addMovie(newMovie) {
    try {
      const response = await axiosInstance.post('/wishlist/addWishlist', newMovie);
      
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  },

  async markWatched(movieId) {
    try {
      const response = await axiosInstance.put(`/wishlist/toggelWatch/${movieId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async deleteMovie(movieId) {
    try {
      const response = await axiosInstance.delete(`/wishlist/deleteWishlist/${movieId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async updateMovie(movieId, data) {
    try {
      const response = await axiosInstance.put(`wishlist/${movieId}`,data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default movieService;
