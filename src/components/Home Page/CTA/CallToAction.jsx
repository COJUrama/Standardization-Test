import Style from './cta.module.css';

function CallToAction() {
  return (
    <div className={Style.container}>
      <img src="./Images/Background Image.png" alt="Background Image" />
      <div className={Style.column}>
        <h2>Designing Better Experience</h2>
        <h2>Problems trying to resolve the conflict between </h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <h5>$16.48</h5>
        <button>ADD YOUR CALL TO ACTION</button>
      </div>
    </div>
  );
}

export default CallToAction;
