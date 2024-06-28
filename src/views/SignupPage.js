import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../actions/authActions';
import { toast } from 'react-toastify';
import '../styles/signup.scss';


const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  
  const handleSubmit = (e) => {
    try{
      e.preventDefault();
      dispatch(signupUser({ email, password, name }));
      navigate('/login');
      toast.success('Signup Successful')
    }
    catch(err){
      toast.error('Signup Failed')
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
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
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
