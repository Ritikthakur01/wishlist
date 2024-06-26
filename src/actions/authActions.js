import authService from '../api/authService';
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants/actionTypes';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const data = await authService.login(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
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
