import React from "react";
import logo from "../../../Assets/Images/logo.png";
import "./IkeaLogo.css";

// Over engineering -1
// You dont need 15 lines of code to import a logo and have it availalbe
// You only need to import it and use it.
const IkeaLogo = () => {
  return (
    <div className="wrapperlogo">
      <img className="logo" src={logo} alt="IKEA logo" label="IKEA logo" />
    </div>
  );
};

export default IkeaLogo;
