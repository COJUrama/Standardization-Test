import Style from './footer.module.css';

function Footer() {
  const mainSections = [
    {
      title: 'Company Info',
      details: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    {
      title: 'Legal',
      details: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    {
      title: 'Features',
      details: [
        'Business Marketing',
        'User Analytic',
        'Live Chat',
        'Unlimited Support',
      ],
    },
    {
      title: 'Resources',
      details: ['IOS & Android', 'Watch a Demo', 'Customers', 'API'],
    },
  ];

  return (
    <footer>
      <div className={Style.container}>
        <div>
          <div className={Style.brand}>
            <div className={Style.brand_info}>
              <h6 className="brand-text">Bandage</h6>
            </div>

            <div className={Style.social_media}>
              <img
                src="./Images/Brand Icons/Facebook-Icon Colored.svg"
                alt="Facebook Icon"
              />
              <img
                src="./Images/Brand Icons/Instagram-Icon Colored.svg"
                alt="Instagram Icon"
              />
              <img
                src="./Images/Brand Icons/Twitter-Icon Colored.svg"
                alt="Twitter Icon"
              />
            </div>
          </div>

          <div className={Style.hr}></div>
        </div>

        <div className={Style.links}>
          <div className={Style.content_wrapper}>
            {mainSections.map((mainSection) => (
              <div key={mainSection.title}>
                <h5>{mainSection.title}</h5>

                <div className={Style.data_section}>
                  {mainSection.details.map((details) => (
                    <p key={mainSection.details.indexOf(details)}>{details}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={Style.get_in_touch}>
            <h5>Get In Touch</h5>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <button>Subscribe</button>
            </div>
            <h6>Lore imp sum dolor Amit</h6>
          </div>
        </div>

        <div>
          <h6>Made With Love By Finland All Right Reserved</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
