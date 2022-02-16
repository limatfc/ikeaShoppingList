import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";

export default function Error() {
  return (
    <div className="wrapper-error">
      <h1>Ops, something went wrong.</h1>
      <h2> Would you like to go back to the:</h2>
      <nav className="nav-error">
        <Link to="/">Home page</Link>
        <Link to="/shoppinglist">Shopping List</Link>
      </nav>
    </div>
  );
}
