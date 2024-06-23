import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Importing the Home component
import Order from '../pages/Order'; // Importing the Order component
import Inventory from '../pages/Inventory'; // Importing the Inventory component
import AddItems from '../pages/AddItems'; // Importing the AddItems component
import Search from '../pages/Search'; // Importing the Search component

export default function Mainbar() {
  return (
    // This is the Main Bar Section
    <div className="mainbar">
      <BrowserRouter>
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the Order page */}
          <Route path="/Order" element={<Order />} />
          {/* Route for the Inventory page */}
          <Route path="/Inventory" element={<Inventory />} />
          {/* Route for the AddItems page */}
          <Route path="/AddItems" element={<AddItems />} />
          {/* Route for the Search page */}
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
