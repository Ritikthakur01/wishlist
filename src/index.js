// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import './styles/main.scss';

// Create the Redux store with configureStore
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
