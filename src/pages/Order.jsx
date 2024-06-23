import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
  // Mock inventory data (can be replaced with actual API calls in real applications)
  const inventory = {
    items: [
      {
        id: '1',
        name: 'Nike Airmax Pro',
        Stock: 100,
        image: 'prod1.jpg',
      },
      {
        id: '2',
        name: 'Adidas Sachin Edition',
        Stock: 150,
        image: 'prod2.jpg',
      },
      {
        id: '3',
        name: 'Nike Air Jordan 1',
        Stock: 50,
        image: 'prod3.jpg',
      },
      {
        id: '4',
        name: 'Reebok Athlete',
        Stock: 250,
        image: 'prod4.jpg',
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
            image: 'prod3.jpg',
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
            image: 'prod2.jpg',
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
            image: 'prod4.jpg',
          },
        ],
        status: 'Pending',
      },
    ],
  };

  // State to manage order statuses (Pending or Done)
  const [orderStatuses, setOrderStatuses] = useState(
    // Initialize statuses based on mock data
    inventory.orders.reduce((acc, order) => {
      acc[order.orderid] = order.status;
      return acc;
    }, {})
  );

  // State to toggle showing pending orders only
  const [showPendingOnly, setShowPendingOnly] = useState(false);

  // Function to mark an order as Done
  const handleMarkAsDone = (orderId) => {
    setOrderStatuses((prevStatuses) => ({
      ...prevStatuses,
      [orderId]: 'Done',
    }));
  };

  // Function to toggle showing pending orders only
  const handleFilterToggle = () => {
    setShowPendingOnly((prevShowPendingOnly) => !prevShowPendingOnly);
  };

  // Filter orders based on showPendingOnly state
  const filteredOrders = showPendingOnly
    ? inventory.orders.filter(
        (order) => orderStatuses[order.orderid] === 'Pending'
      )
    : inventory.orders;

  return (
    <div className="order mainbar">
      {/* Heading section */}
      <div className="heading orderheading">
        <div className="headingtag orderheadingtag">All Orders</div>
        {/* Filter button to toggle showing pending/all orders */}
        <div className="filter" onClick={handleFilterToggle}>
          {showPendingOnly ? 'Show All Orders' : 'Show Pending Orders'}
        </div>
      </div>

      {/* Section to display orders */}
      <div className="ordersection">
        {/* Map through filtered orders and render each order as Orderpagecard component */}
        {filteredOrders.map((order, index) => (
          <Orderpagecard
            key={order.orderid}
            orderid={order.orderid}
            customername={order.customername}
            orderitem={order.orderitem[0]} // Assuming each order has one item for simplicity
            status={orderStatuses[order.orderid]}
            index={index + 1}
            onMarkAsDone={() => handleMarkAsDone(order.orderid)}
          />
        ))}
      </div>
    </div>
  );
}

// Component to render each order as a card
function Orderpagecard({
  orderid,
  customername,
  orderitem,
  status,
  index,
  onMarkAsDone,
}) {
  return (
    // Link wrapping each order card to navigate to order details page
    <Link to={`/Order/${orderid}`} className="ordercardlink">
      {/* Order card container */}
      <div
        className={`orderpagecard ${status === 'Done' ? 'border-green' : ''}`}
      >
        {/* Section for displaying serial number and product image */}
        <div className="snoimage">
          <div className="sno">{index}.</div>
          <img
            src={orderitem.image}
            alt={orderitem.name}
            className="prodimageorderpage"
          />
        </div>
        {/* Section for displaying order ID and item quantity */}
        <div className="idquantity">
          <div className="orderpageid">ID - {orderid}</div>
          <div className="quantity">Count - {orderitem.quantity}</div>
        </div>
        {/* Section for displaying customer name and status */}
        <div className="custnameorderpage idquantity">
          <div className="orderpageid">Customer</div>
          <div className="quantity">{customername}</div>
        </div>
        {/* Section for buttons (Mark Done and Reject Order) */}
        <div className="buttonsection">
          {/* Status display with colored circle */}
          <div className={`status ${status === 'Done' ? 'border-green' : ''}`}>
            <div
              className={status === 'Pending' ? 'redcircle' : 'greencircle'}
            ></div>{' '}
            {status}
          </div>
          {/* Button to mark order as Done */}
          {status === 'Pending' && (
            <div
              className="markasdonebutton"
              onClick={(e) => {
                e.preventDefault();
                onMarkAsDone();
              }}
            >
              Mark Done
            </div>
          )}
          {/* Button to reject order (shown only if order status is Done) */}
          <div
            className={`rejectorderbutton ${
              status === 'Done' ? 'hidebutton' : ''
            }`}
          >
            Reject Order
          </div>
        </div>
      </div>
    </Link>
  );
}
