import './shopping.css';
function Shop() {
  return (
    <div className="img-column">
      <div className="group">
        <div className="card-content">
          <h6>5 Items</h6>
          <h6>FURNITURE</h6>
          <h6>Read More</h6>
        </div>
        <img
          src="./Images/E-Commerce Samples/Card-Item 01.png"
          alt="Card Item"
        />
      </div>
      <div className="group">
        <div>
          <div className="card-content">
            <h6>5 Items</h6>
            <h6>FURNITURE</h6>
            <h6>Read More</h6>
          </div>
          <img
            src="./Images/E-Commerce Samples/Card-Item 02.png"
            alt="Card Item"
          />
        </div>
        <div className="sub-group">
          <div>
            <div className="card-content">
              <h6>5 Items</h6>
              <h6>FURNITURE</h6>
              <h6>Read More</h6>
            </div>
            <img
              src="./Images/E-Commerce Samples/Card-Item 03.png"
              alt="Card Item"
            />
          </div>
          <div>
            <div className="card-content">
              <h6>5 Items</h6>
              <h6>FURNITURE</h6>
              <h6>Read More</h6>
            </div>
            <img
              src="./Images/E-Commerce Samples/Card-Item 04.png"
              alt="Card Item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
