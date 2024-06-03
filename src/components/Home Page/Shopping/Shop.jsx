import './shopping.css';
function Shop() {
  const groupInfo = [
    {
      key: 1,
      cardContent: ['5 Items', 'FURNITURE', 'Read More'],
      imgSrc: './Images/E-Commerce Samples/Card-Item 01.png',
    },
    {
      key: 2,
      cardContent: ['5 Items', 'FURNITURE', 'Read More'],
      imgSrc: './Images/E-Commerce Samples/Card-Item 02.png',
    },
    {
      key: 3,
      cardContent: ['5 Items', 'FURNITURE', 'Read More'],
      imgSrc: './Images/E-Commerce Samples/Card-Item 03.png',
    },
    {
      key: 4,
      cardContent: ['5 Items', 'FURNITURE', 'Read More'],
      imgSrc: './Images/E-Commerce Samples/Card-Item 04.png',
    },
  ];

  return (
    <div className="img-column">
      {groupInfo.map((info) => (
        <div key={info.key} className="group">
          <div className="card-content">
            {info.cardContent.map((details) => (
              <h6 key={details}>{details}</h6>
            ))}
          </div>
          <img src={info.imgSrc} alt="Card Item" />
        </div>
      ))}
    </div>
  );
}

export default Shop;
