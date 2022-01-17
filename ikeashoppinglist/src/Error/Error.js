import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <h1>Ops, something went wrong.</h1>
      <h2>
        Would you like to go back to the:
        <nav>
          <Link to="/">Home page</Link>
        </nav>
        <nav>
          <Link to="/shoppinglist">Shopping List</Link>
        </nav>
      </h2>
    </React.Fragment>
  );
};
export default Error;
