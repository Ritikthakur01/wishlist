// src/views/HomePage.js
import React from 'react';
import MovieList from '../components/MovieList';
import AddEditMovieForm from '../components/AddEditMovieForm';

const HomePage = () => {
  return (
    <div>
      <h1>Movie Watchlist</h1>
      <AddEditMovieForm />
      <MovieList />
    </div>
  );
};

export default HomePage;
