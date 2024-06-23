import React from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetails() {
  // Extract orderId from URL params using useParams hook
  const { orderId } = useParams();

  // Mock inventory data (can be replaced with actual API calls in real applications)
  const inventory = {
    items: [
      {
        id: '1',
        name: 'Nike Airmax Pro',
        Stock: 100,
        image: '../prod1.jpg',
      },
      {
        id: '2',
        name: 'Adidas Sachin Edition',
        Stock: 150,
        image: '../prod2.jpg',
      },
      {
        id: '3',
        name: 'Nike Air Jordan 1',
        Stock: 50,
        image: '../prod3.jpg',
      },
      {
        id: '4',
        name: 'Reebok Athlete',
        Stock: 250,
        image: '../prod4.jpg',
      },
    ],
    orders: [
      {
        orderid: '1',
        customername: 'Abhishek Jain',
        orderitem: [
          {
            id: '1',
            name: 'Nike Air Jordan 1',
            quantity: '2',
            image: '../prod3.jpg',
          },
        ],
        status: 'Pending',
      },
      {
        orderid: '2',
        customername: 'Shailee Jain',
        orderitem: [
          {
            id: '2',
            name: 'Adidas Sachin Edition',
            quantity: '5',
            image: '../prod2.jpg',
          },
        ],
        status: 'Done',
      },
      {
        orderid: '3',
        customername: 'Lokesh Jain',
        orderitem: [
          {
            id: '3',
            name: 'Reebok Athlete',
            quantity: '10',
            image: '../prod4.jpg',
          },
        ],
        status: 'Pending',
      },
    ],
  };

  // Find the order details based on orderId from inventory data
  const order = inventory.orders.find((order) => order.orderid === orderId);

  // If order with given orderId is not found, display "Order not found"
  if (!order) {
    return <div>Order not found</div>;
  }

  // Destructure order details
  const { customername, orderitem, status } = order;
  const { name, id, quantity, image } = orderitem[0]; // Assuming one item per order

  // Find corresponding item details from inventory items based on order item id
  const item = inventory.items.find((item) => item.id === id);

  return (
    <div className="orderdetails mainbar">
      {/* Heading section */}
      <div className="heading">
        <div className="headingtag orderheadingtag">Order ID : {orderId}</div>
      </div>
      {/* Section to display order details */}
      <div className="orderdetailssection">
        {/* Display product image */}
        <div className="orderimage">
          <img src={image} alt={name} className="orderdetailspageimage" />
        </div>
        {/* Display order data */}
        <div className="orderdata">
          <div className="customername">Customer Name - {customername}</div>
          <div className="customername">Product Name - {name}</div>
          <div className="customername">Product ID - {id}</div>
          <div className="customername">Count - {quantity}</div>
          <div className="customername">Status - {status}</div>
          {/* Display stock count of the item, or 'N/A' if item not found */}
          <div className="customername">
            Stock - {item ? item.Stock : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
}
