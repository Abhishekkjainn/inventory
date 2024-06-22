import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
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

  const [orderStatuses, setOrderStatuses] = useState(
    inventory.orders.reduce((acc, order) => {
      acc[order.orderid] = order.status;
      return acc;
    }, {})
  );

  const [showPendingOnly, setShowPendingOnly] = useState(false);

  const handleMarkAsDone = (orderId) => {
    setOrderStatuses((prevStatuses) => ({
      ...prevStatuses,
      [orderId]: 'Done',
    }));
  };

  const handleFilterToggle = () => {
    setShowPendingOnly((prevShowPendingOnly) => !prevShowPendingOnly);
  };

  const filteredOrders = showPendingOnly
    ? inventory.orders.filter(
        (order) => orderStatuses[order.orderid] === 'Pending'
      )
    : inventory.orders;

  return (
    <div className="order mainbar">
      <div className="heading orderheading">
        <div className="headingtag orderheadingtag">All Orders</div>
        <div className="filter" onClick={handleFilterToggle}>
          {showPendingOnly ? 'Show All Orders' : 'Show Pending Orders'}
        </div>
      </div>

      <div className="ordersection">
        {filteredOrders.map((order, index) => (
          <Orderpagecard
            key={order.orderid}
            orderid={order.orderid}
            customername={order.customername}
            orderitem={order.orderitem[0]} // assuming each order has one item
            status={orderStatuses[order.orderid]}
            index={index + 1}
            onMarkAsDone={() => handleMarkAsDone(order.orderid)}
          />
        ))}
      </div>
    </div>
  );
}

function Orderpagecard({
  orderid,
  customername,
  orderitem,
  status,
  index,
  onMarkAsDone,
}) {
  return (
    <Link to={`/Order/${orderid}`} className="ordercardlink">
      <div
        className={`orderpagecard ${status === 'Done' ? 'border-green' : ''}`}
      >
        <div className="snoimage">
          <div className="sno">{index}.</div>
          <img
            src={orderitem.image}
            alt={orderitem.name}
            className="prodimageorderpage"
          />
        </div>
        <div className="idquantity">
          <div className="orderpageid">ID - {orderid}</div>
          <div className="quantity">Count - {orderitem.quantity}</div>
        </div>
        <div className="custnameorderpage idquantity">
          <div className="orderpageid">Customer</div>
          <div className="quantity">{customername}</div>
        </div>
        <div className="buttonsection">
          <div className={`status ${status === 'Done' ? 'border-green' : ''}`}>
            <div
              className={status === 'Pending' ? 'redcircle' : 'greencircle'}
            ></div>{' '}
            {status}
          </div>
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
