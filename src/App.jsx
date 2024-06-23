// Import necessary components and styles
import './App.css';
import AddItems from './pages/AddItems'; // Import AddItems component
import Home from './pages/Home'; // Import Home component
import Inventory from './pages/Inventory'; // Import Inventory component
import Order from './pages/Order'; // Import Order component
import OrderDetails from './pages/OrderDetails'; // Import OrderDetails component
import Search from './pages/Search'; // Import Search component
// import Mainbar from './mainbar/Mainbar';      // Mainbar component (currently commented out)
import Sidebar from './sidebar/Sidebar'; // Import Sidebar component
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route from react-router-dom

function App() {
  return (
    <div className="completepage">
      {' '}
      {/* Main container with completepage class */}
      <BrowserRouter>
        {' '}
        {/* BrowserRouter to manage routing */}
        <Sidebar /> {/* Sidebar component */}
        <Routes>
          {' '}
          {/* Routes component to define routes */}
          <Route path="/" element={<Home />} /> {/* Route for Home component */}
          <Route path="/Order" element={<Order />} />{' '}
          {/* Route for Order component */}
          <Route path="/Order/:orderId" element={<OrderDetails />} />{' '}
          {/* Route for OrderDetails component with parameter orderId */}
          <Route path="/Inventory" element={<Inventory />} />{' '}
          {/* Route for Inventory component */}
          <Route path="/AddItems" element={<AddItems />} />{' '}
          {/* Route for AddItems component */}
          <Route path="/Search" element={<Search />} />{' '}
          {/* Route for Search component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
