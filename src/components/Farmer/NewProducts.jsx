import {useState, useEffect} from 'react'
import axios from 'axios'
import FamerProductCard from './FamerProductCard'


function NewProducts(){
const [products, setProducts] = useState([])



useEffect( () =>{
  const fetchProducts = async () =>{
    
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data)
    }
    catch(err){
      if(err.response){
        console.error(err.response.status);
        console.error(err.response.headers);
        console.error(err.response.data.message);
      }else{
        console.log(`Error:${err.message}`);
      }
      
    }
    
  }
  fetchProducts()
}

,[])

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