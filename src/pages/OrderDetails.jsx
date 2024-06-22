import React from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetails() {
  const { orderId } = useParams();
  // Assuming you have access to the inventory data here or can fetch it
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

  const order = inventory.orders.find((order) => order.orderid === orderId);

  if (!order) {
    return <div>Order not found</div>;
  }

  const { customername, orderitem, status } = order;
  const { name, id, quantity, image } = orderitem[0]; // assuming one item per order
  const item = inventory.items.find((item) => item.id === id);

  return (
    <div className="orderdetails mainbar">
      <div className="heading">
        <div className="headingtag orderheadingtag">Order ID : {orderId}</div>
      </div>
      <div className="orderdetailssection">
        <div className="orderimage">
          <img src={image} alt={name} className="orderdetailspageimage" />
        </div>
        <div className="orderdata">
          <div className="customername">Customer Name - {customername}</div>
          <div className="customername">Product Name - {name}</div>
          <div className="customername">Product ID - {id}</div>
          <div className="customername">Count - {quantity}</div>
          <div className="customername">Status - {status}</div>
          <div className="customername">
            Stock - {item ? item.Stock : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
}
