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

}