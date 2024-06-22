import './App.css';
import AddItems from './pages/AddItems';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Order from './pages/Order';
import Search from './pages/Search';
// import Mainbar from './mainbar/Mainbar';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="completepage">
      <BrowserRouter>
        <Sidebar />
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

export default App;
