import React from "react";
import "./SortBy.css";

const SortBy = (props) => {
  return (
    <div className="sortByDiv">
      <span>Sort by:</span>
      <button onClick={props.sortByName} className="linkLike">
        Name
      </button>
      <button onClick={props.sortByPrice} className="linkLike">
        Price
      </button>
    </div>
  );
};

export default SortBy;
