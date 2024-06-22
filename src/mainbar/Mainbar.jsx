import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Inventory from '../pages/Inventory';
import AddItems from '../pages/AddItems';
import Search from '../pages/Search';

export default function Mainbar() {
  return (
    <div className="mainbar">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/AddItems" element={<AddItems />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
