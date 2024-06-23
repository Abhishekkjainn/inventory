import React, { useState } from 'react';

export default function Search() {
  // Mock inventory data
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

  // State for search term input and filtered items
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(inventory.items); // Initialize items with all inventory items

  // Handler for search input change
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase(); // Convert search input to lowercase for case-insensitive search
    setSearchTerm(value); // Update search term state
    // Filter items based on search term match in item name
    const filteredItems = inventory.items.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setItems(filteredItems); // Update items state with filtered items
  };

  // Handler to delete an item
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id); // Filter out the item with matching ID
    setItems(updatedItems); // Update items state without the deleted item
  };

  return (
    <div className="search mainbar">
      {/* Heading section */}
      <div className="heading">
        <div className="headingtag">Search Items</div>
      </div>

      {/* Search bar section */}
      <div className="searchbardiv">
        <div className="group">
          {/* Search icon */}
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          {/* Search input */}
          <input
            className="input"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Inventory table headers */}
      <div className="inventoryheads">
        <div className="invsno">Sno.</div>
        <div className="invimg">Prod. Image</div>
        <div className="invid">Prod. ID</div>
        <div className="invname">Prod. Name</div>
        <div className="invquantity">Count</div>
        <div className="invbutton">
          <div className="deleteitem">Delete</div>
        </div>
      </div>

      {/* Inventory items section */}
      <div className="inventorysection">
        {/* Map through filtered items to display each item */}
        {items.map((item, index) => (
          <InvCard
            key={item.id}
            index={index + 1}
            imgsource={item.image}
            id={item.id}
            invname={item.name}
            invcount={item.Stock}
            onDelete={deleteItem}
          />
        ))}
      </div>
    </div>
  );

  // Component for rendering each inventory item card
  function InvCard({ index, imgsource, id, invname, invcount, onDelete }) {
    return (
      <div className="invcard">
        <div className="invsno">{index}</div>
        <div className="invimg">
          <img src={imgsource} alt="" className="invimgimg" />
        </div>
        <div className="invid">{id}</div>
        <div className="invname">{invname}</div>
        <div className="invquantity">{invcount}</div>
        <div className="invbutton">
          {/* Delete button */}
          <button className="deleteitembutton" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
