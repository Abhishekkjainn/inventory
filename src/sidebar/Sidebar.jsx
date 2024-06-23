import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    // Sidebar container with class name 'sidebar'
    <div className="sidebar">
      {/* Link to the home page */}
      <Link to={'/'} className="textdec">
        {/* Company logo and name section */}
        <div className="companydiv">
          <div className="companylogo">
            {/* Company logo image */}
            <img src="/mainlogo.png" alt="" className="companylogoimage" />
          </div>
          {/* Company name */}
          <div className="companyname">ReOrder</div>
        </div>
      </Link>

      {/* Info section containing links */}
      <div className="infodiv">
        {/* Division containing all links */}
        <div className="linkdiv">
          {/* Link to the Orders page */}
          <Link to={'/Order'} className="textdec">
            {/* Button-like link for Orders */}
            <div className="linkbutton">
              {/* Image/icon for Orders */}
              <div className="linkimage">
                <img src="order.png" alt="" className="linkimageimage" />
              </div>
              {/* Text label for Orders */}
              <div className="linktag">Orders</div>
            </div>
          </Link>
          {/* Link to the Inventory page */}
          <Link to={'/Inventory'} className="textdec">
            {/* Button-like link for Inventory */}
            <div className="linkbutton">
              {/* Image/icon for Inventory */}
              <div className="linkimage">
                <img src="inventory.png" alt="" className="linkimageimage" />
              </div>
              {/* Text label for Inventory */}
              <div className="linktag">Inventory</div>
            </div>
          </Link>
          {/* Link to the AddItems page */}
          <Link to={'/AddItems'} className="textdec">
            {/* Button-like link for Add Items */}
            <div className="linkbutton">
              {/* Image/icon for Add Items */}
              <div className="linkimage">
                <img src="additems.png" alt="" className="linkimageimage" />
              </div>
              {/* Text label for Add Items */}
              <div className="linktag">Add Items</div>
            </div>
          </Link>
          {/* Link to the Search page */}
          <Link to={'/Search'} className="textdec">
            {/* Button-like link for Search */}
            <div className="linkbutton">
              {/* Image/icon for Search */}
              <div className="linkimage">
                <img src="search.png" alt="" className="linkimageimage" />
              </div>
              {/* Text label for Search */}
              <div className="linktag">Search</div>
            </div>
          </Link>
        </div>
        {/* Developer information section */}
        <div className="devdiv"></div>
      </div>
    </div>
  );
}
