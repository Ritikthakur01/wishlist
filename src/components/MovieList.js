import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieReducer.movies);
  const error = useSelector(state => state.movieReducer.error);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h2>Movie List</h2>
      {error && <p>Error: {error}</p>}
      {movies.map(movie => (
        <div key={movie._id}>
          <h3>{movie.title}</h3>
          <p>Description: {movie.description}</p>
          {/* Display other movie details */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
