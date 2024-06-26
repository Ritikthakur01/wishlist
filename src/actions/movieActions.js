// actions/movieActions.js
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from '../constants/actionTypes';
import movieService from '../api/movieService';

export const fetchMovies = () => async (dispatch) => {
  try {
    const data = await movieService.fetchMovies();
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
  }
};

export const addMovie = (newMovie) => async (dispatch) => {
  try {
    const data = await movieService.addMovie(newMovie);
    dispatch({ type: ADD_MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_MOVIE_FAILURE, payload: error.message });
  }
};

// Implement other movie actions (edit, delete, mark as watched/unwatched, etc.) similarly
