import React from "react";
import logo from "../../../Assets/Images/logo.png";
import "./IkeaLogo.css";

const IkeaLogo = () => {
  return (
    <div className="wrapperlogo">
      <img className="logo" src={logo} alt="IKEA logo" label="IKEA logo" />
    </div>
  );
};

export default IkeaLogo;
