export default function Home() {
  return (
    <div className="home mainbar">
      <div className="heading">
        <div className="headingtag">Dashboard</div>
      </div>

      <div className="mainbarpage">
        <Mainpagetags />
        <RecentOrdersection />
      </div>
    </div>
  );

  function Mainpagetags() {
    return (
      <div className="mainpagetags">
        <div className="totalordertag tagcards">
          <div className="topcard">
            <img src="order.png" alt="" className="cardicon" />
            <div className="cardtoptag">Total Orders</div>
          </div>
          <div className="middlecard">
            <div className="ordernumber">50</div>
          </div>
          <div className="bottomcard"></div>
        </div>
        <div className="processedordertag tagcards">
          <div className="topcard">
            <img src="done.png" alt="" className="cardicon" />
            <div className="cardtoptag">Processed Orders</div>
          </div>
          <div className="middlecard">
            <div className="ordernumber">50</div>
          </div>
          <div className="bottomcard"></div>
        </div>
        <div className="remainingorderstag tagcards">
          <div className="topcard">
            <img src="remaining.png" alt="" className="cardicon" />
            <div className="cardtoptag">Remaining Orders</div>
          </div>
          <div className="middlecard">
            <div className="ordernumber">50</div>
          </div>
          <div className="bottomcard"></div>
        </div>
      </div>
    );
  }

  function RecentOrdersection() {
    return (
      <div className="recentorderssection">
        <div className="recentorderheading">Recent Orders</div>
        <OrderCard
          sno={'1'}
          image={'prod1.jpg'}
          id={'12AB34'}
          itemcount={'2'}
          custname={'Abhishek Jain'}
          status={'Pending'}
        />
        <OrderCard
          sno={'2'}
          image={'prod1.jpg'}
          id={'12AB34'}
          itemcount={'2'}
          custname={'Ronak Jain'}
          status={'Pending'}
        />
        <OrderCard
          sno={'3'}
          image={'prod1.jpg'}
          id={'12AB34'}
          itemcount={'2'}
          custname={'Lokesh Jain'}
          status={'Pending'}
        />
        <OrderCard
          sno={'4'}
          image={'prod1.jpg'}
          id={'12AB34'}
          itemcount={'2'}
          custname={'Kalash Jain'}
          status={'Done'}
        />
        <OrderCard
          sno={'5'}
          image={'prod1.jpg'}
          id={'12AB34'}
          itemcount={'2'}
          custname={'Shailee Jain'}
          status={'Done'}
        />
        <OrderCard
          sno={'6'}
          image={'prod1.jpg'}
          id={'12AB34'}
          itemcount={'2'}
          custname={'Aarya Jain'}
          status={'Pending'}
        />
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
        <div className="status">
          {' '}
          <div className="redcircle"></div> {status}
        </div>
      </div>
    );
  }
}
