import React, { useState, useContext } from "react";
import "./Tasks.css";
import Button from "../button/Button";
import TasksContext from "../../store/tasks-context";
import Header from "./header/Header";
import NewTask from "./newTask/NewTask";

const Tasks = ({ showModalHandler }) => {
  const [showCompletedItems, setShowCompletedItems] = useState(false);
  const contextTasks = useContext(TasksContext);

  const showCompletedItemHandler = () => {
    setShowCompletedItems(!showCompletedItems);
  };

  const IncompleteItems = contextTasks.inputedTasks.filter(
    (item) => item.status === "incomplete"
  );
  const CompleteItems = contextTasks.inputedTasks.filter(
    (item) => item.status === "complete"
  );

  return (
    <div className="shoppingTasks">
      <Header />
      <NewTask list={IncompleteItems} />
      <Button onClickHandler={showModalHandler}>Add a new item</Button>
      <button className="link-like wrapper" onClick={showCompletedItemHandler}>
        {showCompletedItems ? "Hide" : "Show"} completed items
      </button>
      {showCompletedItems && (
        <NewTask completedDecorations={true} list={CompleteItems} />
      )}
    </div>
  );
};

export default Tasks;
