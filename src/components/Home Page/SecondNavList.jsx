import PropType from 'prop-types';

function SecondNavList({ cartNumber, numberOfLikes }) {
  return (
    <>
      <ul>
        <li>
          <img src="" alt="User Icon" />
        </li>
        <li>Login / Register</li>
      </ul>
      <ul>
        <img src="" alt="Search Icon" />
      </ul>
      <ul>
        <li>
          <img src="" alt="Shopping Cart Icon" />
        </li>
        <li>{cartNumber}</li>
      </ul>
      <ul>
        <li>
          <img src="" alt="Heart Icon" />
        </li>
        <li>{numberOfLikes}</li>
      </ul>
    </>
  );
}

export default SecondNavList;

SecondNavList.propTypes = {
  cartNumber: PropType.number,
  numberOfLikes: PropType.number,
};
