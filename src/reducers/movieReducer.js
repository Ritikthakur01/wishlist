// reducers/movieReducer.js
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from '../constants/actionTypes';

const initialState = {
  movies: [],
  error: null
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        error: null
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        error: null
      };
    case ADD_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
