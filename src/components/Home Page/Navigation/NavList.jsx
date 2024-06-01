import './navlist.css';
import PropTypes from 'prop-types';

function NavList({ content, toggle = false }) {
  if (toggle) {
    return (
      <div className="list--toggle">
        <h3>{content}</h3>
        <img
          src="./Images/General Icons/Dropdown Icon.svg"
          alt="Drop down sign"
        />
      </div>
    );
  }

  return (
    <div className="list">
      <h3>{content}</h3>
    </div>
  );
}

export default NavList;

NavList.propTypes = {
  content: PropTypes.string.isRequired,
  toggle: PropTypes.bool,
};
