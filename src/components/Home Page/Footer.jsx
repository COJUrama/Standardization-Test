function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <div>
            <div className="navbar__brand">
              <h6>Bandage</h6>
            </div>
            <div className="social-media">
              <img src="" alt="Facebook Icon" />
              <img src="" alt="Instagram Icon" />
              <img src="" alt="Twitter Icon" />
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div>
          <div>
            <h5>Company Info</h5>
            <div>
              <h6>About Us</h6>
              <h6>Carrier</h6>
              <h6>We are hiring</h6>
              <h6>Blog</h6>
            </div>
          </div>
          <div>
            <h5>Get In Touch</h5>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <button>Subscribe</button>
              <h6>Lore imp sum dolor Amit</h6>
            </div>
          </div>
          <div>
            <h6>Made With Love By Finland All Right Reserved</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
