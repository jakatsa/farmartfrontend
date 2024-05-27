import React, { useState, useEffect } from 'react';

function FarmerPage() {
  const [token, setToken] = useState('');
  const [orders, setOrders] = useState([]);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/orders/', {
          method: 'GET',
          headers: {
            'Authorization': `Token ${storedToken}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setOrders(data);
        } else {
          console.error('Error:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchAnimals = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/orders/', {
          method: 'GET',
          headers: {
            'Authorization': `Token ${storedToken}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          const transformedData = data.map(animal => ({
            name: animal.animal_name,
            amount: animal.available,
          }));
          setAnimals(transformedData);
        } else {
          console.error('Error:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrders();
    fetchAnimals();
  }, []);

  const handleAccept = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/orders/accept/${orderId}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'accept' }),
      });
      const data = await response.json();
      if (response.ok) {
        const updatedOrders = orders.map(order => {
          if (order.order_id === orderId) {
            return { ...order, order_status: 'accepted' };
          }
          return order;
        });
        setOrders(updatedOrders);
        alert(data.message);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeny = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/orders/accept/${orderId}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'deny' }),
      });
      const data = await response.json();
      if (response.ok) {
        const updatedOrders = orders.map(order => {
          if (order.order_id === orderId) {
            return { ...order, order_status: 'denied' };
          }
          return order;
        });
        setOrders(updatedOrders);
        alert(data.message);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Animal Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Accept</th>
            <th>Deny</th>
          </tr>
        </thead>
  <tbody>
  {orders.map(order => (
    <tr key={order.id}>
      <td>{order.order_id}</td>
      <td>{order.animal_name}</td>
      <td>{order.quantity}</td>
      <td>{order.order_status}</td>
      <td>
        {order.order_status === 'pending' && (
          <input type="checkbox" onChange={() => handleAccept(order.order_id)} />
        )}
      </td>
      <td>
        {order.order_status === 'pending' && (
          <input type="checkbox" onChange={() => handleDeny(order.order_id)} />
        )}
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default FarmerPage;
