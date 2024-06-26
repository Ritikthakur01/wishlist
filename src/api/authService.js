// api/authService.js
import axios from 'axios';
import BASE_URL from '../utils/config';

const authService = {
  async login(credentials) {
    try {
        console.log("responseresponse")
        const response = await axios.post(`${BASE_URL}/user/auth/login`, {
            email: credentials.email,
            pwd: credentials.password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          console.log('Login successful:', response.data);
          return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  },

  async signup(details) {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/register`, details);
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
};

export default authService;
