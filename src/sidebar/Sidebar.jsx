import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={'/'} className="textdec">
        <div className="companydiv">
          <div className="companylogo">
            <img src="/mainlogo.png" alt="" className="companylogoimage" />
          </div>
          <div className="companyname">ReOrder</div>
        </div>
      </Link>
      <div className="infodiv">
        <div className="linkdiv">
          <Link to={'/Order'} className="textdec">
            <div className="linkbutton">
              <div className="linkimage">
                <img src="order.png" alt="" className="linkimageimage" />
              </div>
              <div className="linktag">Orders</div>
            </div>
          </Link>
          <Link to={'/Inventory'} className="textdec">
            <div className="linkbutton">
              <div className="linkimage">
                <img src="inventory.png" alt="" className="linkimageimage" />
              </div>
              <div className="linktag">Inventory</div>
            </div>
          </Link>
          <Link to={'/AddItems'} className="textdec">
            <div className="linkbutton">
              <div className="linkimage">
                <img src="additems.png" alt="" className="linkimageimage" />
              </div>
              <div className="linktag">Add Items</div>
            </div>
          </Link>
          <Link to={'/Search'} className="textdec">
            <div className="linkbutton">
              <div className="linkimage">
                <img src="search.png" alt="" className="linkimageimage" />
              </div>
              <div className="linktag">Search</div>
            </div>
          </Link>
        </div>
        <div className="devdiv"></div>
      </div>
    </div>
  );
}
