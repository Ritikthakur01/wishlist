import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/nav.scss';

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success('Logout Successful')
    navigate('/');
  };

  return (
    <nav className="nav-container">
      <Link to="/" className="logo">WishList</Link>
      <div className="nav-links">
        {user ? (
          <>
            <span className="nav-username">Hello, {user.name}</span>
            <button className="nav-link" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/signup" className="nav-button signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
