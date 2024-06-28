import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import './styles/main.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {jwtDecode} from 'jwt-decode';
import { LOGIN_SUCCESS } from './constants/actionTypes';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


const token = localStorage.getItem('token');
if (token) {
  const decodedToken = jwtDecode(token);
  store.dispatch({ type: LOGIN_SUCCESS, payload: { user: decodedToken } });
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);
