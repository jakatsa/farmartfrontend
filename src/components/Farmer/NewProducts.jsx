import {useState, useEffect} from 'react'
import axios from 'axios'
import FamerProductCard from './FamerProductCard'


function NewProducts(){
const [token, setToken] = useState('');
const [products, setProducts] = useState([])

// console.log(products)
// console.log(token)
useEffect( () =>{
  const fetchProducts = async () =>{
    console.log("use ee")
    const storedToken = localStorage.getItem('token');
    console.log("stored token",storedToken)
    setToken(storedToken);
    const fetchAnimals = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/animals/farmer/', {
          method: 'GET',
          headers: {
            'Authorization': `Token ${storedToken}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          // const transformedData = data.map(animal => ({
          //   name: animal.animal_name,
          //   amount: animal.available,
          // }));
          setProducts(data);
          console.log(data)
        } else {
          console.error('Error:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchAnimals();
  }
fetchProducts()
}, []);
 
    

  return (
    <div className="farmer-products-wrapper">
      <div className="container">
      <h2 className="farmer-products-title | font-bold uppercase text-4xl">my products</h2>
      </div>
      <div className="farmer-products-grid | md:grid-cols-2  container grid ">
        {products.map(product => <FamerProductCard key={product.id} {...product}/>)}
      </div>

    </div>
  )
}

export default NewProducts