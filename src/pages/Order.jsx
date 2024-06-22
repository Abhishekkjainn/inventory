export default function Order() {
  return (
    <div className="order mainbar">
      <div className="heading orderheading">
        <div className="headingtag orderheadingtag">All Orders</div>
        <div className="filter">Filter</div>
      </div>

      <div className="ordersection">
        <Orderpagecard />
        <Orderpagecard />
        <Orderpagecard />
        <Orderpagecard />
        <Orderpagecard />
      </div>
    </div>
  );

  function Orderpagecard() {
    return (
      <div className="orderpagecard">
        <div className="snoimage">
          <div className="sno">1.</div>
          <img src="prod1.jpg" alt="" className="prodimageorderpage" />
        </div>
        <div className="idquantity">
          <div className="orderpageid">ID - 123ABC</div>
          <div className="quantity">Count - 2</div>
        </div>
        <div className="custnameorderpage idquantity">
          <div className="orderpageid">Customer</div>
          <div className="quantity">Abhishek Jain</div>
        </div>
        <div className="buttonsection">
          <div className="status">
            {' '}
            <div className="redcircle"></div> Pending
          </div>
          <div className="markasdonebutton">Mark Done</div>
          <div className="rejectorderbutton">Reject Order</div>
        </div>
      </div>
    );
  }
}
