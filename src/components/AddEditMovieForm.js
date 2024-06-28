// AddEditMovieForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../actions/movieActions';
import '../styles/AddEditMovieForm.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddEditMovieForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const newMovie = {
        title,
        description,
        releaseYear,
        genre,
      };
      dispatch(addMovie(newMovie));
      toast.success('Wishlist added successfully.');
      // Reset form fields after submission
      setTitle('');
      setDescription('');
      setReleaseYear('');
      setGenre('');
      navigate('/');
    }catch(err){
      console.log(err);
      toast.error('Failed to add wishlist.');
    }
  };

  return (
    <div className="form-card">
      <h2>Add Wishlist Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEditMovieForm;
