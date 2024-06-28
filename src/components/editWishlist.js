// src/views/EditWishlist.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, updateMovie } from '../actions/movieActions';
import '../styles/editWishlist.scss'; // Import the new stylesheet

const EditWishlist = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(state => state.movieReducer.movies);
  const movie = movies.data.find(m => m._id === movieId);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
    rating: '',
    review: ''
  });

  useEffect(() => {
    if (!movie) {
      dispatch(fetchMovies());
    } else {
      setFormData({
        title: movie.title,
        description: movie.description,
        releaseYear: movie.releaseYear,
        genre: movie.genre,
        rating: movie.rating,
        review: movie.review
      });
    }
  }, [dispatch, movie]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateMovie(movieId, formData));
    navigate('/');
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="edit-wishlist-card">
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit} className="edit-wishlist-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Release Year:</label>
          <input
            type="text"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Review:</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Movie</button>
      </form>
    </div>
  );
};

export default EditWishlist;
