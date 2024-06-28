import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, markWatched, deleteMovie } from '../actions/movieActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles/movieList.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieReducer.movies);
  const error = useSelector(state => state.movieReducer.error);
  let user = useSelector(state => state.authReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(fetchMovies());
    }
  }, [dispatch, user]);

  const handleMarkWatched = async (movieId) => {
    await dispatch(markWatched(movieId));
    dispatch(fetchMovies()); // Fetch movies again to update the list
  };

  const handleDelete = (movieId) => {
    dispatch(deleteMovie(movieId));
  };

  const handleEdit = (movieId) => {
    console.log('Edit movie with id: ' + movieId);
    // Navigate to the edit page or show an edit form
  };

  return (
    <div className="movie-list-container">
      {error && <p className="error-message">Error: {error}</p>}
      {user ? (
        movies.data && movies.data.length > 0 ? (
          movies.data.map(movie => (
            <div key={movie._id} className="movie-card">
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Description: {movie.description}</p>
                <p>Release Year: {movie.releaseYear}</p>
                <p>Genre: {movie.genre}</p>
              </div>
              <div className="movie-actions">
                <FontAwesomeIcon 
                  icon={movie.watched ? faEye : faEyeSlash} 
                  onClick={() => handleMarkWatched(movie._id)} 
                  className="icon" 
                />
                <Link to={`/edit-wishlist/${movie._id}`}>
                  <FontAwesomeIcon 
                    icon={faEdit} 
                    onClick={() => handleEdit(movie._id)} 
                    className="icon" 
                  />
                </Link>
                
                <FontAwesomeIcon 
                  icon={faTrash} 
                  onClick={() => handleDelete(movie._id)} 
                  className="icon" 
                />
              </div>
            </div>
          ))
        ) : (
          <p className="login-message no-movies-message">No movies found. Add some movies to your watchlist!</p>
        )
      ) : (
        <p className="login-message">User needs to log in first to see the movie details.</p>
      )}
    </div>
  );
};

export default MovieList;
