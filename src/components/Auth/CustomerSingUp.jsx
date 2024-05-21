import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


function CustomerSignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user: {
          username: '',
          email: '',
          password: '',
          role: 'customer'
        }
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('user.')) {
          const key = name.split('.')[1];
          setFormData(prevState => ({
            ...prevState,
            user: {
              ...prevState.user,
              [key]: value
            }
          }));
        } else {
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:8000/api/customer/register/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (!response.ok) {
            throw new Error('Failed to register');
          }
          // If signup is successful, navigate to the login page
          navigate('/login');
        } catch (error) {
          console.error('Error registering:', error);
        }
      };

      return(
        <div className="customer-sign-up form-wrapper">
        <div className="form-wrapper-sign-up glass flow">
          {/* Logo */}
          <p className='font-semi-bold uppercase text-7xl text-center'>farmart</p>
          {/* Form heading */}
          <h2 className='form-heading font-semi-bold uppercase text-2xl text-center'>Customer's Sign Up</h2>
          {/* Form wrapper */}
          <form onSubmit={handleSubmit} className='form-sign-up flow'>
            {/* Username */}
            <div className="form-item flex flex-col">
              <label className="uppercase font-semi-bold" htmlFor="username">Username</label>
              <input
                className="input-area"
                name="user.username"
                id="username"
                type="text"
                value={formData.user.username}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email */}
            <div className="form-item flex flex-col">
              <label className="uppercase font-semi-bold" htmlFor="email">Email</label>
              <input
                className="input-area"
                name="user.email"
                id="email"
                type="email"
                value={formData.user.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Password */}
            <div className="form-item flex flex-col">
              <label className="uppercase font-semi-bold" htmlFor="password">Password</label>
              <input
                className="input-area"
                name="user.password"
                id="password"
                type="password"
                value={formData.user.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className="sign-up-submit-btn btn bg-primary-500 text-neutral-100 font-bold text-sm form-btn">Sign Up</button>
          </form>
          <div className="already-have-an-account flex justify-between">
            <p>Already have an account?</p>
            <NavLink to="/login" className="font-bold text-l capitalize">Log In</NavLink>
          </div>
          <p className='uppercase text-center or'>or</p>
          <div className="social-btns flex flex-col flow">
            <NavLink to="#" className="flex social-btn btn btn-ghost capitalize text-center">
              <img className="sign-up-social-icon" src="../src/assets/icons/google.svg" alt="google icon" />
              <p>Sign up with Google</p>
            </NavLink>
            <NavLink to="#" className="flex social-btn btn btn-ghost capitalize text-center">
              <img className="sign-up-social-icon" src="../src/assets/icons/facebook.svg" alt="facebook icon" />
              <p>Sign up with Facebook</p>
            </NavLink>
          </div>
        </div>
      </div>

      );

} export default CustomerSignUp;