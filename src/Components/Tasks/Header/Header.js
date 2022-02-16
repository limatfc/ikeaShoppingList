import React, { useContext } from "react";
import "./Header.css";
import TasksContext from "../../../store/tasks-context";

export default function Header() {
  const ctxTasks = useContext(TasksContext);

  return (
    <React.Fragment>
      <header className="header-tasks">Shopping list</header>
      <div className="sort-by-div">
        <span>Sort by:</span>
        <button onClick={ctxTasks.sortByName} className="link-like-header">
          Name
        </button>
        <button onClick={ctxTasks.sortByPrice} className="link-like-header">
          Price
        </button>
      </div>
    </React.Fragment>
  );
}
