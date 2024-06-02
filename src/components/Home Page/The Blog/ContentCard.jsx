import Style from './content-card.module.css';
import PropTypes from 'prop-types';

function ContentCard({ theImage }) {
  return (
    <div className={Style.container}>
      <img src={theImage} alt="Featured Room" />
      <button>NEW</button>
      <div className={Style.the_info}>
        <div className={Style.tags}>
          <h6>Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4>Loudest à la Madison #1 (L&#39;integral)</h4>
        <p>
          We focus on ergonomics and meeting you where you work. It&#39;s only a
          keystroke away.
        </p>
        <div className={Style.the_details}>
          <div>
            <img src="./Images/General Icons/Time Icon.svg" alt="Time Icon" />
            <h6>22 April 2021</h6>
          </div>
          <div>
            <img
              src="./Images/General Icons/Metric Icon.svg"
              alt="Metric Icon"
            />
            <h6>10 comments</h6>
          </div>
        </div>
        <div className={Style.learn_more}>
          <h6>Learn More</h6>
          <img
            src="./Images/General Icons/Left-Arrow Icon.svg"
            alt="Left Arrow Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default ContentCard;

ContentCard.propTypes = {
  theImage: PropTypes.string.isRequired,
};
