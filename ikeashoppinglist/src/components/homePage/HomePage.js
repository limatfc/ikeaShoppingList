import React from "react";

import "./HomePage.css";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/FrontPageImage.png";
import Button from "../button/Button";
import Summary from "./summary/Summary";

export default function HomePage(props) {
  return (
    <div className="wrapper-home-page">
      <div className="wrapper-logo">
        <img className="logo" src={logo} alt="IKEA logo" label="IKEA logo" />
      </div>
      <div className="image-homepage-wrapper">
        <img
          className="image-homepage"
          src={image}
          alt="A blue purse and a yellow wallet."
        />
      </div>
      <Summary />

      <Button onClickHandler={props.showModalHandler}>Add Items</Button>
    </div>
  );
}
