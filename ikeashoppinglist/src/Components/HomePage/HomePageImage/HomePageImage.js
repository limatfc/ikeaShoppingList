import image from "../../Images/FrontPageImage.png";
import "./HomePageImage.css";

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
