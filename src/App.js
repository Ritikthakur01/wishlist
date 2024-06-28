// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Nav from './components/Nav';
import AddEditMovieForm from './components/AddEditMovieForm';
import EditWishlist from './components/editWishlist';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/movies/:id" element={<MovieDetailsPage/>} />
        <Route path="/add-wishlist" element={<AddEditMovieForm/>} />
        <Route path="/edit-wishlist/:movieId" element={<EditWishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
