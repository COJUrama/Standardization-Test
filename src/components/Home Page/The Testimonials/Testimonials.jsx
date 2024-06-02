import Style from './testimonials.module.css';

function Testimonials() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const imgSrc = './Images/Testimonial Details/Random Images/Image ';

  return (
    <div className={Style.container}>
      <div className={Style.columns}>
        <div className={Style.sections}>
          <div className={Style.details}>
            <h6>What they say about us</h6>
            <div className={Style.the_curtail}>
              <img
                src="./Images/Testimonial Details/User Image.png"
                alt="User Image"
              />
              <img
                src="./Images/Testimonial Details/Stars.svg"
                alt="Star Rating"
              />
              <h6>
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </h6>
              <div>
                <h6>Regina Miles</h6>
                <h6>Designer</h6>
              </div>
            </div>
          </div>
          <div className={Style.the_images}>
            {images.map((image) => (
              <img key={image} src={imgSrc + image + '.png'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
