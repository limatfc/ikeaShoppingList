import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IncompleteTask from "./IncompleteTask/IncompleteTask";
import "./Tasks.css";
import Button from "../Button/Button";
import CompleteTask from "./CompleteTask/CompleteTask";
import TasksContext from "../../store/tasks-context";
import Header from "./Header/Header";

const Tasks = () => {
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
      <Header
        sortByPrice={ctxTasks.sortByPrice}
        sortByName={ctxTasks.sortByName}
      />
      <IncompleteTask
        onTaskChangeHandler={ctxTasks.onTaskChangeHandler}
        inputedTasks={ctxTasks.inputedTasks}
      />
      <Button
        onClickHandler={() => {
          navigate("/additems");
        }}
      >
        Add a new item
      </Button>
      {!showCompletedItems && (
        <div className="wrapper">
          <button onClick={showCompletedItem} className="linkLike">
            View completed items
          </button>
        </div>
      )}
      {showCompletedItems && (
        <React.Fragment>
          <CompleteTask inputedTasks={ctxTasks.inputedTasks} />
          <button className="link" onClick={hideCompletedItem}>
            Hide completed items
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Tasks;
