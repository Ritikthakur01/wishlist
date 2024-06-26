// src/views/MovieDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const movie = useSelector(state => state.movieReducer.movies.find(m => m._id === movieId));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Description: {movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
      <p>Rating: {movie.rating}</p>
      <p>Review: {movie.review}</p>
      {/* Add buttons for editing or deleting movie */}
    </div>
  );
};

export default MovieDetailsPage;
