import React from "react";
import { Link } from "react-router-dom";

// Fragment -1
// Again thisE is not the correct use of fragment
// Fragments are used when a component may need some sub components to be rendered inside, Those subcomponents are separated files
const Error = () => {
  return (
    <React.Fragment>
      <h1>Ops, something went wrong.</h1>
      {/* HTML tags -1 */}
      {/* You are using a titlle as a menu item */}
      {/* It would be ok to put 1 link inside a title but not 2 */}
      <p>Would you like to go back to the:</p>
      <nav>
        <Link to="/">Home page</Link>
      </nav>
      <nav>
        <Link to="/shoppinglist">Shopping List</Link>
      </nav>
    </React.Fragment>
  );
};
export default Error;
