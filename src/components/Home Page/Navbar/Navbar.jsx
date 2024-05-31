import './style.css';
import NavList from '../NavList';
import SecondNavList from '../SecondNavList';
// import SocialMediaIcon from './SocialMediaIcon';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="divider">
          <section className="section">
            <div className="column">
              <div className="item">
                <img
                  src="./Images/General Icons/Call-Icon.svg"
                  alt="Call Icon"
                  className="icon"
                />
                <h6 className="h-key-info">(225) 555-0118</h6>
              </div>
              <div className="item">
                <img
                  src="./Images/General Icons/Mail-Icon.svg"
                  alt="Mail Icon"
                  className="icon"
                />
                <h6 className="h-key-info">michael.rivera@example.com</h6>
              </div>
            </div>
            <div className="column">
              <div className="sub-section">
                <div className="item">
                  <h6 className="h-key-info">
                    Follow Us and get a chance to win 80% off
                  </h6>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="item higher-gap top-align">
                <h6 className="h-key-info">Follow Us :</h6>
                <div className="extra-margins">
                  <img
                    src="./Images/Brand Icons/Instagram-Icon.svg"
                    alt="Instagram Icon"
                    className="icon brand"
                  />
                  <img
                    src="./Images/Brand Icons/YouTube-Icon.svg"
                    alt="YouTube Icon"
                    className="icon brand"
                  />
                  <img
                    src="./Images/Brand Icons/Facebook-Icon.svg"
                    alt="Facebook Icon"
                    className="icon brand"
                  />
                  <img
                    src="./Images/Brand Icons/Twitter-Icon.svg"
                    alt="Twitter Icon"
                    className="icon brand"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container--light">
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
