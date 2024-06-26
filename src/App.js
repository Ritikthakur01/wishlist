// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/movies/:id" element={<MovieDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
