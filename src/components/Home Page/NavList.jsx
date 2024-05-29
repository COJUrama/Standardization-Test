import PropTypes from 'prop-types';

function NavList({ content }) {
  return (
    <>
      <h3>{content}</h3>
      <img src="" alt="Drop down sign" />
    </>
  );
}

export default NavList;

NavList.propTypes = {
  content: PropTypes.string.isRequired,
};
