import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimalForm = () => {
  const [formData, setFormData] = useState({
    animal_picture: '',
    animal_name: '',
    animal_type: '',
    animal_age: '',
    animal_location: '',
    animal_breed: '',
    animal_category: '',
    animal_gender: '',
    available: '',
    farmer: '',
    animal_price: '',
    animal_description: ''
  });

  useEffect(() => {
    // Fetch farmer ID here and set it in formData
    const token = localStorage.getItem('token');
    console.log(token) 
    axios.get('farmartbackend-3.onrender.com/farmer-info', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        const farmerId = response.data.farmer_id; 
        setFormData({
          ...formData,
          farmer: farmerId
        });
      })
      .catch(error => {
        console.error('Error fetching farmer data:', error);
      });
  }, []); // Run only once on component mount

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('farmartbackend-3.onrender.com/api/animals/add/', formData, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log('Animal created successfully:', response.data);
        console.log(token)
      })
      .catch(error => {
        console.error('There was an error creating the animal!', error);
      });
  };

  return (
    <div className="container">
      <section className="product-form-section">
        {/* Form title */}
        <h2 className="product-form-title uppercase font-semibold text-primary-800 text-2xl">product form</h2>
        <div className="product-form-wrapper">
          {/* form */}
          <form onSubmit={handleSubmit} className="farmer-product-form shadow rounded-md">
            <div className="product-form-elements-wrapper flex flex-col">
              {/* Name */}
              <div className="product-form-item flex flex-col">
                <label htmlFor="name" className="uppercase font-semibold">name</label>
                <input onChange={handleChange} type="text" className="farmer-product-input-text product-input" name="animal_name" id="name" placeholder="eg.cow,bull,hen," required />
              </div>
              {/* Form  segment 1 */}
              {/* Type and Category Wrapper */}
              <div className="type-category-wrapper flex">
                {/* Type */}
                <div className="product-form-item flex flex-col">
                  <label htmlFor="type" className="uppercase font-semibold">animal type</label>
                  <input onChange={handleChange} type="text" className="farmer-product-input-text product-input" name="animal_type" id="type" placeholder="eg.cattle,goat,sheep" required />
                </div>
                {/* Category */}
                <div className="product-form-item flex flex-col">
                  <label htmlFor="location" className="uppercase font-semibold">animal location</label>
                  <input onChange={handleChange} type="text" className="farmer-product-input-text product-input" name="animal_location" id="location" required />
                </div>
              </div>
              {/* End of type and category wrapper */}
              {/* Breed and  number wrapper */}
              <div className="breed-number-wrapper flex">
                {/* Breed */}
                <div className="product-form-item flex flex-col">
                  <label htmlFor="breed" className="uppercase font-semibold">animal breed</label>
                  <input onChange={handleChange} type="text" className="farmer-product-input-text product-input" name="animal_breed" id="breed" placeholder="eg.chianina,limousin cattle,brown swiss cattle" required />
                </div>
                {/* Number/ Available */}
                <div className="product-form-item flex flex-col">
                  <label htmlFor="available" className="uppercase font-semibold">number</label>
                  <input onChange={handleChange} type="number" className="farmer-product-input-number product-input" name="available" id="available" required />
                </div>
              </div>
              {/* End of breed and number wrapper */}
              {/* Description */}
              <div className="product-form-item flex flex-col">
                <label htmlFor="description" className="uppercase font-semibold">description</label>
                <textarea onChange={handleChange} name="animal_description" id="description" className="farm-form-textarea product-input" rows="6" required></textarea>
              </div>
              {/* Age and price wrapper */}
              <div className="age-price-wrapper flex">
                {/* Age */}
                <div className="product-form-item flex flex-col">
                  <label htmlFor="age" className="uppercase font-semibold">age in months</label>
                  <input onChange={handleChange} type="number" className="farmer-product-input-text product-input" name="animal_age" id="age" required />
                </div>
                {/* Price */}
                <div className="product-form-item flex flex-col">
                  <label htmlFor="price" className="uppercase font-semibold">price</label>
                  <input onChange={handleChange} type="number" className="farmer-product-input-number product-input" name="animal_price" id="price" required />
                </div>
              </div>
              {/* End of age and price wrapper */}
              {/* Image */}
              <div className="product-form-item flex flex-col">
                <label htmlFor="farm-form-image" className="uppercase font-semibold">animal image url</label>
                <textarea onChange={handleChange} name="animal_picture" id="farm-form-image" className="farm-form-textarea product-input" rows="6" required></textarea>
              </div>
              {/* Submit Button */}
              <div className="farmer-product-form-btn-wrapper">
                <input onChange={handleChange} value="submit" type="submit" className="farmer-product-form-btn bg-primary-500 uppercase text-white font-bold rounded hover:bg-white hover:text-primary-800" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AnimalForm;
