// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  authReducer,
  movieReducer
});

export default rootReducer;
