import React, { useContext } from "react";
import TasksContext from "../../../store/tasks-context";
import "./NewTask.css";

export default function NewTask(props) {
  const ctxTasks = useContext(TasksContext);

  const onChangeHandler = (event) => {
    ctxTasks.onTaskChangeHandler(event.target.value);
  };

  return (
    <div className="new-task-wrapper">
      {props.list.map((filteredTasks) => {
        return (
          <div key={filteredTasks.id} className="wraper-checkbox">
            <label className="new-task-label">
              <input
                onChange={onChangeHandler}
                type="checkbox"
                key={filteredTasks.key}
                value={filteredTasks.key}
                checked={props.completedDecorations}
              ></input>
              <span
                className={
                  props.completedDecorations ? "completed-decoration" : ""
                }
              >{` ${filteredTasks.name}, ${filteredTasks.price}:-`}</span>
            </label>
            <img
              className="thumbnail"
              src={filteredTasks.imageLink}
              alt="black and white with default value"
              label="black and white with default value"
            />
          </div>
        );
      })}
    </div>
  );
}
