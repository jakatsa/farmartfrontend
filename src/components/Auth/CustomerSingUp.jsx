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


}