import image from "../../../Assets/Images/FrontPageImage.png";
import "./HomePageImage.css";

// -1
// Same as logo
const HomePageImage = () => {
  return (
    <div className="imageHPwrapper">
      <img
        className="imageHP"
        src={image}
        alt="A blue purse and a yellow wallet."
      />
    </div>
  );
};

export default HomePageImage;
