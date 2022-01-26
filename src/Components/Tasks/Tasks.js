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
  // naming -1 use ful name ctx
  const ctxTasks = useContext(TasksContext);

  const showCompletedItem = () => {
    setShowCompletedItems(true);
  };

  const hideCompletedItem = () => {
    setShowCompletedItems(false);
  };

  return (
    <div className="shoppingTasks">
      {/* Architecture -1 */}
      {/* If we have a global context, then why are we passing props here, */}
      {/* Open the file Header to continue this comment message... */}
      <Header
        sortByPrice={ctxTasks.sortByPrice}
        sortByName={ctxTasks.sortByName}
      />
      <IncompleteTask
        onTaskChangeHandler={ctxTasks.onTaskChangeHandler}
        inputedTasks={ctxTasks.inputedTasks}
      />
      {/* make it one line */}
      <Button onClickHandler={() => navigate("/additems")}>
        Add a new item
      </Button>
      {/* You dont need a wrapper, its a sign that we need to improve our CSS layout techniques, we will see this during the course */}
      {!showCompletedItems && (
        <div className="wrapper">
          <button onClick={showCompletedItem} className="linkLike">
            View completed items
          </button>
        </div>
      )}

      {/* This fragment is a sign that you could have organized this in a better way */}
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
