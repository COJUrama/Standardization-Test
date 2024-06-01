import './second-navlist.css';
import PropType from 'prop-types';

function SecondNavList({ cartNumber, numberOfLikes }) {
  return (
    <div className="user-info">
      <div className="user-details">
        <img
          src="./Images/General Icons/User-Profile Icon.svg"
          alt="User Icon"
        />
        <h6 className="login-info">Login / Register</h6>
      </div>

      <div className="user-details">
        <img
          className="icon"
          src="./Images/General Icons/Search Icon.svg"
          alt="Search Icon"
        />
      </div>

      <div className="user-details">
        <img
          className="icon"
          src="./Images/General Icons/Shopping-Cart Icon.svg"
          alt="Search Icon"
        />
        <h6 className="cart-details">{cartNumber}</h6>
      </div>

      <div className="user-details">
        <img
          className="icon"
          src="./Images/General Icons/Heart Icon.svg"
          alt="Search Icon"
        />
        <h6 className="cart-details">{numberOfLikes}</h6>
      </div>
    </div>
  );
}

export default SecondNavList;

SecondNavList.propTypes = {
  cartNumber: PropType.number,
  numberOfLikes: PropType.number,
};
