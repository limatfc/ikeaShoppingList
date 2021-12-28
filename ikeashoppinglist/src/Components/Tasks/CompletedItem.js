import React, { useContext } from "react";
import TasksContext from "../../store/tasks-context";
import "./CompletedItems.css";

const CompletedItem = (props) => {
  const ctxTasks = useContext(TasksContext);

  return (
    <div className="taskWrapperCom">
      {ctxTasks.completedItems.map((completedTask, i) => (
        <div
          className="taskitemsCom"
          key={i}
        >{`${completedTask.name}, ${completedTask.price}`}</div>
      ))}
      <button className="link" onClick={props.hideCompletedItem}>
        Hide completed items
      </button>
    </div>
  );
};

export default CompletedItem;
