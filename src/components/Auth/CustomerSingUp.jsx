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

}