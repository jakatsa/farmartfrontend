import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); 
        console.log(data.token);
        if (data.role === 'customer') {
          navigate('/HomePage');
        } else if (data.role === 'farmer') {
          navigate('/farmer');
        }
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login | grid form-wrapper">
      <div className="form-wrapper-login | glass flow rounded-xl">
        {/* Logo */}
        <p className='font-bold uppercase text-5xl text-center'>farmart</p>
        {/* Form heading */}
        <h2 className='form-heading font-bold uppercase text-3xl text-center'>login</h2>
        {/* Form wrapper */}

        <form onSubmit={handleLogin} className='form-sign-up flow'>
          {/* Username */}
          <div className="form-item flex flex-col">
            <label className="uppercase font-semi-bold" htmlFor="username">Username</label>
            <input
              className="input-area"
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div className="form-item flex flex-col">
            <label className="uppercase font-semi-bold" htmlFor="password">Password</label>
            <input
              className="input-area"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className="sign-up-submit-btn btn bg-primary-500 text-neutral-100 font-bold text-sm form-btn">log in</button>
        </form>
        <div className="sign-alternative flex justify-between">
          <p>Don't have an account?</p> 
          <NavLink to="/signup" className="font-bold text-l capitalize">sign up</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
