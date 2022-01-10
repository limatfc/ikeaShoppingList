import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <h1>Ops, something went wrong.</h1>
      <h2>
        You can go back
        <nav>
          <Link to="/"> here</Link>
        </nav>
      </h2>
    </React.Fragment>
  );
};
export default Error;
