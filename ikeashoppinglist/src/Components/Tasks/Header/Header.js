import React from "react";
import "./Header.css";

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

export default SortBy;
