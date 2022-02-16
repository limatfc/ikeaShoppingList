import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <React.Fragment>
      <h2 className="title-homepage">EIKA's shopping list</h2>

      <p className="paragraph-homepage">
        Welcome to EIKA's shopping list. Here you will be able to create a todo
        list with the furniture you want to buy.
      </p>
      <p className="paragraph-homepage">
        To get started, press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also add an
        image after the item is added by touching the camera icon.
      </p>
    </React.Fragment>
  );
};

export default Summary;
