import Style from './features.module.css';
import SecondStyle from '../The Products/products.module.css';

function Features() {
  return (
    <div className={Style.container}>
      <div className={SecondStyle.main_content}>
        <h2>Featured Products</h2>
        <h3>THE BEST SERVICES</h3>
        <p>Problems trying to resolve the conflict between </p>
      </div>
      <div className={Style.columns}>
        <div>
          <img
            src="./Images/The Features/Gratitude Icon.svg"
            alt="Gratitude Icon"
          />
          <h3>Easy Wins</h3>
          <p>Get your best looking smile now!</p>
        </div>
        <div>
          <img
            src="./Images/The Features/Support Icon.svg"
            alt="Support Icon"
          />
          <h3>Concrete</h3>
          <p className={Style.narrow_width}>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div>
          <img src="./Images/The Features/Growth Icon.svg" alt="Growth Icon" />
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
