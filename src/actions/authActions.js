import authService from '../api/authService';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE,LOGOUT  } from '../constants/actionTypes';
import {jwtDecode} from 'jwt-decode';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const data = await authService.login(credentials);
    const decodedToken = jwtDecode(data.token); // Decode the token
    localStorage.setItem('token', data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: { user: decodedToken }});
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const signupUser = (details) => async (dispatch) => {
  try {
    const data = await authService.signup(details);

    dispatch({ type: SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, payload: error.message });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
}
