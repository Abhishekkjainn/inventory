import React from 'react';

export default function Home() {
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

  return (
    <div className="home mainbar">
      <div className="heading">
        <div className="headingtag">Dashboard</div>
      </div>

      <div className="mainbarpage">
        <Mainpagetags orders={inventory.orders} />
        <RecentOrdersection orders={inventory.orders} />
      </div>
    </div>
  );

  function Mainpagetags({ orders }) {
    const totalOrders = orders.length;
    const processedOrders = orders.filter(
      (order) => order.status === 'Done'
    ).length;
    const remainingOrders = totalOrders - processedOrders;

    return (
      <div className="mainpagetags">
        <div className="totalordertag tagcards">
          <div className="topcard">
            <img src="order.png" alt="" className="cardicon" />
            <div className="cardtoptag">Total Orders</div>
          </div>
          <div className="middlecard">
            <div className="ordernumber">{totalOrders}</div>
          </div>
          <div className="bottomcard"></div>
        </div>
        <div className="processedordertag tagcards">
          <div className="topcard">
            <img src="done.png" alt="" className="cardicon" />
            <div className="cardtoptag">Processed Orders</div>
          </div>
          <div className="middlecard">
            <div className="ordernumber">{processedOrders}</div>
          </div>
          <div className="bottomcard"></div>
        </div>
        <div className="remainingorderstag tagcards">
          <div className="topcard">
            <img src="remaining.png" alt="" className="cardicon" />
            <div className="cardtoptag">Remaining Orders</div>
          </div>
          <div className="middlecard">
            <div className="ordernumber">{remainingOrders}</div>
          </div>
          <div className="bottomcard"></div>
        </div>
      </div>
    );
  }

  function RecentOrdersection({ orders }) {
    return (
      <div className="recentorderssection">
        <div className="recentorderheading">Recent Orders</div>
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

  function OrderCard({ sno, image, id, itemcount, custname, status }) {
    return (
      <div className="recentordersdiv">
        <div className="sno">{sno}.</div>
        <div className="itemimage">
          <img src={image} alt="product" className="productimage" />
        </div>
        <div className="itemid">Id - {id}</div>
        <div className="itemid">No - {itemcount}</div>
        <div className="itemid custname">Customer Name : {custname}</div>
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
