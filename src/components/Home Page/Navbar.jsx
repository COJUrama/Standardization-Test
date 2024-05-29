import NavList from './NavList';
import SecondNavList from './SecondNavListNavList';
import SocialMediaIcon from './SocialMediaIcon';

function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <h3>(225) 555-0118</h3>
          <h3>michael.rivera@example.com</h3>
        </div>
        <div>
          <h3>Follow Us and get a chance to win 80% off</h3>
        </div>
        <div>
          <div>
            <h3>Follow Us :</h3>
          </div>
          <div>
            <div>
              <SocialMediaIcon />
              <SocialMediaIcon />
              <SocialMediaIcon />
              <SocialMediaIcon />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h3>Bandage</h3>
          </div>
          <div>
            <NavList />
            <SecondNavList />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
