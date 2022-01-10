import React, { useContext } from "react";
import TasksContext from "../../store/tasks-context";
import "./CompleteTask.css";

const CompleteTask = (props) => {
  const ctxTasks = useContext(TasksContext);

  return (
    <div className="taskWrapperCom">
      {ctxTasks.inputedTasks
        .filter((task) => task.status === "complete")
        .map((filteredTasks, i) => (
          <div className="taskItemCom" key={i}>
            <span
              className="spanCom"
              key={i}
            >{`${filteredTasks.name}, ${filteredTasks.price}`}</span>
            <img
              className="imageCom"
              src={filteredTasks.imageLink}
              alt="black and white"
            />
          </div>
        ))}
      <button className="link" onClick={props.hideCompletedItem}>
        Hide completed items
      </button>
    </div>
  );
};

export default CompleteTask;
