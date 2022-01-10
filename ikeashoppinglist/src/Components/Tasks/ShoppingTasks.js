import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IncompleteTask from "./IncompleteTask";
import "./ShoppingTasks.css";
import "../Helpers/Button.css";
import CompleteTask from "./CompleteTask";
import TasksContext from "../../store/tasks-context";

const ShoppingTasks = () => {
  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const navigate = useNavigate();
  const ctxTasks = useContext(TasksContext);

  const showCompletedItem = () => {
    setShowCompletedItems(true);
  };

  const hideCompletedItem = () => {
    setShowCompletedItems(false);
  };

  return (
    <div className="shoppingTasks">
      <header className="headerTasks">Shopping list</header>
      <div className="sortByDiv">
        <span>Sort by:</span>
        <button onClick={ctxTasks.sortByName} className="linkLike">
          Name
        </button>
        <button onClick={ctxTasks.sortByPrice} className="linkLike">
          Price
        </button>
      </div>
      <IncompleteTask />
      <button
        className="button"
        onClick={() => {
          navigate("/additems");
        }}
      >
        Add a new item
      </button>
      {!showCompletedItems && (
        <div className="wrapper">
          <button onClick={showCompletedItem} className="linkLike">
            View completed items
          </button>
        </div>
      )}
      {showCompletedItems && (
        <CompleteTask hideCompletedItem={hideCompletedItem} />
      )}
    </div>
  );
};

export default ShoppingTasks;
