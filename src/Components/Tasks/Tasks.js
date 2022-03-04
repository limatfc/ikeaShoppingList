import React, { useState, useContext } from "react";
import "./Tasks.css";
import Button from "../button/Button";
import TasksContext from "../../store/tasks-context";
import Header from "./header/Header";
import NewTask from "./newTask/NewTask";

export default function Tasks({ showModalHandler }) {
  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const contextTasks = useContext(TasksContext);

  const showCompletedItemHandler = () => {
    setShowCompletedItems(!showCompletedItems);
  };

  const IncompleteItemsFilter = contextTasks.inputedTasks.filter(
    (item) => item.status === "incomplete"
  );

  const CompleteItemsFilter = contextTasks.inputedTasks.filter(
    (item) => item.status === "complete"
  );

  return (
    <div className="shopping-tasks">
      <Header />
      {IncompleteItemsFilter.map((item) => (
        <NewTask key={item.key} list={item} />
      ))}
      <Button onClickHandler={showModalHandler}>Add a new item</Button>
      <button className="link-like wrapper" onClick={showCompletedItemHandler}>
        {showCompletedItems ? "Hide" : "Show"} completed items
      </button>
      {showCompletedItems &&
        CompleteItemsFilter.map((item) => (
          <NewTask key={item.key} completedDecorations={true} list={item} />
        ))}
    </div>
  );
}
