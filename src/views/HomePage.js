import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import AddEditMovieForm from '../components/AddEditMovieForm';
import '../styles/HomePage.scss'; // Import SCSS file

const HomePage = () => {
  const user = useSelector((state) => state.authReducer.user); // Get the user from the Redux state

  return (
    <div className="home-page-container"> 
      <div className="page-header"> 
        <h2>Movie Watchlist</h2>
        {user && (
          <Link to="/add-wishlist" className="add-button">
            Add Wishlist
          </Link>
        )}
      </div>
      <MovieList />
    </div>
  );
};

export default HomePage;
