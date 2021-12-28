import React from "react";
import logo from "../Images/logo.png";
import "./IkeaLogo.css";

const IkeaLogo = () => {
  return (
    <div className="wrapperlogo">
      <img className="logo" src={logo} alt="IKEA logo" />
    </div>
  );
};

export default IkeaLogo;
