// api/authService.js
import axios from 'axios';
import BASE_URL from '../utils/config';


const authService = {
  async login(credentials) {
    try {
        const response = await axios.post(`${BASE_URL}/user/auth/login`, {
            email: credentials.email,
            pwd: credentials.password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });

          return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  },

  async signup(details) {
    try {
      const response = await axios.post(`${BASE_URL}/user/auth/register`, details, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
};

export default authService;
