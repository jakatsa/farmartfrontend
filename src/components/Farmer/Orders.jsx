import axios from 'axios'
import { useEffect, useState } from 'react'


function Orders () {
const [orders, setOrders] = useState([])
console.log(orders)
  useEffect(()=>{
    const fetchOrders = async () =>{
      try{
        const response = await axios.get('https://fakestoreapi.com/products');
        setOrders(response.data)
      }
      catch(err){
       if(err.response){ 
        console.error(err.response.status);
        console.error(err.response.headers);
        console.error(err.response.data.message);
      } else{
        console.log(`Error:${err.message}`);
      }

      }
    }

    fetchOrders()
    },[])

  return (
    <div></div>
  )
}

export default Orders