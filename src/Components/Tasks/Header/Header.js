import React, { useContext } from "react";
import "./Header.css";
import TasksContext from "../../../store/tasks-context";

export default function Header() {
  const ctxTasks = useContext(TasksContext);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
