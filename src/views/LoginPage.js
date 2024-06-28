import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/authActions';
import { toast } from 'react-toastify';
import '../styles/login.scss';


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginState = useSelector(state => state.authReducer);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser({ email, password }));
      toast.success('Login successful!');
      console.log("loginState,loginState",loginState)
      
      navigate('/');
    } catch (error) {
      toast.error('Login failed.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
