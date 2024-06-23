import React from 'react';

export default function Home() {
  // Mock inventory data (for demonstration)
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

  return (
    // Main container for the Home page with class 'home' and 'mainbar'
    <div className="home mainbar">
      {/* Heading section */}
      <div className="heading">
        <div className="headingtag">Dashboard</div>
      </div>

      {/* Main content section */}
      <div className="mainbarpage">
        {/* Component for displaying main page tags (Total Orders, Processed Orders, Remaining Orders) */}
        <Mainpagetags orders={inventory.orders} />
        {/* Component for displaying recent order section */}
        <RecentOrdersection orders={inventory.orders} />
      </div>
    </div>
  );

  // Component for displaying main page tags (Total Orders, Processed Orders, Remaining Orders)
  function Mainpagetags({ orders }) {
    // Calculate total, processed, and remaining orders
    const totalOrders = orders.length;
    const processedOrders = orders.filter(
      (order) => order.status === 'Done'
    ).length;
    const remainingOrders = totalOrders - processedOrders;

    return (
      <div className="mainpagetags">
        {/* Total Orders tag */}
        <div className="totalordertag tagcards">
          <div className="topcard">
            {/* Icon for Total Orders */}
            <img src="order.png" alt="" className="cardicon" />
            <div className="cardtoptag">Total Orders</div>
          </div>
          <div className="middlecard">
            {/* Display total number of orders */}
            <div className="ordernumber">{totalOrders}</div>
          </div>
          <div className="bottomcard"></div>
        </div>
        {/* Processed Orders tag */}
        <div className="processedordertag tagcards">
          <div className="topcard">
            {/* Icon for Processed Orders */}
            <img src="done.png" alt="" className="cardicon" />
            <div className="cardtoptag">Processed Orders</div>
          </div>
          <div className="middlecard">
            {/* Display number of processed orders */}
            <div className="ordernumber">{processedOrders}</div>
          </div>
          <div className="bottomcard"></div>
        </div>
        {/* Remaining Orders tag */}
        <div className="remainingorderstag tagcards">
          <div className="topcard">
            {/* Icon for Remaining Orders */}
            <img src="remaining.png" alt="" className="cardicon" />
            <div className="cardtoptag">Remaining Orders</div>
          </div>
          <div className="middlecard">
            {/* Display number of remaining orders */}
            <div className="ordernumber">{remainingOrders}</div>
          </div>
          <div className="bottomcard"></div>
        </div>
      </div>
    );
  }

  // Component for displaying recent order section
  function RecentOrdersection({ orders }) {
    return (
      <div className="recentorderssection">
        {/* Heading for Recent Orders section */}
        <div className="recentorderheading">Recent Orders</div>
        {/* Map through orders to display each order as a card */}
        {orders.map((order, index) => (
          <OrderCard
            key={order.orderid}
            sno={index + 1}
            image={order.orderitem[0].image}
            id={order.orderid}
            itemcount={order.orderitem[0].quantity}
            custname={order.customername}
            status={order.status}
          />
        ))}
      </div>
    );
  }

  // Component for displaying individual order card
  function OrderCard({ sno, image, id, itemcount, custname, status }) {
    return (
      <div className="recentordersdiv">
        {/* Serial number of the order */}
        <div className="sno">{sno}.</div>
        {/* Image of the ordered product */}
        <div className="itemimage">
          <img src={image} alt="product" className="productimage" />
        </div>
        {/* Order ID */}
        <div className="itemid">Id - {id}</div>
        {/* Quantity of items ordered */}
        <div className="itemid">No - {itemcount}</div>
        {/* Customer name */}
        <div className="itemid custname">Customer Name : {custname}</div>
        {/* Status of the order with conditional styling */}
        <div className={`status ${status === 'Pending' ? '' : 'greenborder'}`}>
          <div
            className={status === 'Pending' ? 'redcircle' : 'greencircle'}
          ></div>
          {status}
        </div>
      </div>
    );
  }
}
