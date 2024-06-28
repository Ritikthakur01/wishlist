// actions/movieActions.js
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE,MARK_WATCHED_SUCCESS, DELETE_MOVIE_SUCCESS,UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_FAILURE } from '../constants/actionTypes';
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

export const updateMovie = (movieId, updatedData) => async (dispatch) => {
  try {
    const data = await movieService.updateMovie(movieId, updatedData);
    dispatch({
      type: UPDATE_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MOVIE_FAILURE,
      payload: error.message,
    });
  }
}

export const markWatched = (movieId) => async (dispatch) => {
    const updatedMovie = await movieService.markWatched(movieId);
    dispatch({ type: MARK_WATCHED_SUCCESS, payload: updatedMovie });
};

export const deleteMovie = (movieId) => async (dispatch) => {
    await movieService.deleteMovie(movieId);
    dispatch({ type: DELETE_MOVIE_SUCCESS, payload: movieId });  
};


// Implement other movie actions (edit, delete, mark as watched/unwatched, etc.) similarly


