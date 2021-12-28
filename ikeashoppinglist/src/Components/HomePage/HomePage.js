import React from "react";
import "./HomePage.css";
import IkeaLogo from "./IkeaLogo";
import image from "../Images/FrontPageImage.png";
import Summary from "./Summary";
import ButtonHP from "./ButtonHP";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="wrapperHomePage">
        <IkeaLogo />
        <div className="imageHPwrapper">
          <img
            className="imageHomePage"
            src={image}
            alt="A blue purse and a yellow wallet."
          />
        </div>
        <Summary />
        <ButtonHP />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
