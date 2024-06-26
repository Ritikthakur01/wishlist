// api/movieService.js
import axios from 'axios';
import BASE_URL from '../utils/config';

const movieService = {
  async fetchMovies() {
    try {
      const response = await axios.get(`${BASE_URL}/wishlist/getWishlists`);
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  },

  async addMovie(newMovie) {
    try {
      const response = await axios.post(`${BASE_URL}/wishlist/addWishlist`, newMovie);
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  },
};

export default movieService;
