import React from "react";

import "./Button.css";

// If the button only do this, then it could be just placed inside the home page and task directly
const Button = (props) => {
  return (
    <button className="button" onClick={props.onClickHandler} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
