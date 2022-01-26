import React from "react";
import "./Header.css";

// Here we could have imported the context and have access to sortByName and sortByPrice
const SortBy = (props) => {
  return (
    <React.Fragment>
      <header className="headerTasks">Shopping list</header>
      <div className="sortByDiv">
        <span>Sort by:</span>
        <button onClick={props.sortByName} className="linkLike">
          Name
        </button>
        <button onClick={props.sortByPrice} className="linkLike">
          Price
        </button>
      </div>
    </React.Fragment>
  );
};

// Naming -1 the file is called Header here is called SortBy
export default SortBy;
