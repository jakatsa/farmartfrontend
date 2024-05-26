import {useState, useEffect} from 'react'
import axios from 'axios'
function NewProducts(){
const [products, setProducts] = useState([])
// console.log(products)
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
    <div>Products</div>
  )
}

export default NewProducts