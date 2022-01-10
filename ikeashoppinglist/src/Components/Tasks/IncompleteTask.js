import React, { useContext } from "react";
import TasksContext from "../../store/tasks-context";
import "./IncompleteTask.css";

const IncompleteTask = () => {
  const ctxTask = useContext(TasksContext);

  const onChangeHandler = (event) => {
    ctxTask.onTaskChangeHandler(event.target.value);
  };

  return (
    <div className="taskWrapperIn">
      {ctxTask.inputedTasks
        .filter((task) => task.status === "incomplete")
        .map((filteredTasks, i) => {
          return (
            <div key={i} className="taskitemsIn">
              <label className="labelIn">
                <input
                  onChange={onChangeHandler}
                  type="checkbox"
                  key={filteredTasks.key}
                  value={filteredTasks.key}
                ></input>
                <span>{` ${filteredTasks.name}, ${filteredTasks.price}:-`}</span>
              </label>
              <img
                className="imageIn"
                src={filteredTasks.imageLink}
                alt="black and white with default value"
              />
            </div>
          );
        })}
    </div>
  );
};

export default IncompleteTask;
