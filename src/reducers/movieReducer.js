import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE, MARK_WATCHED_SUCCESS, DELETE_MOVIE_SUCCESS, UPDATE_MOVIE_FAILURE, UPDATE_MOVIE_SUCCESS } from '../constants/actionTypes';

const initialState = {
  movies: { data: [] }, // Initialize with an empty data array
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        error: null,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: [...state.movies.data, action.payload],
        },
        error: null,
      };
    case ADD_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case MARK_WATCHED_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.map(movie =>
            movie._id === action.payload._id ? action.payload : movie
          ),
        },
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.filter(movie => movie._id !== action.payload),
        },
      };
      case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.map(movie =>
            movie._id === action.payload._id ? action.payload : movie
          ),
        },
        error: null,
      };
    case UPDATE_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
