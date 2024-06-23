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
