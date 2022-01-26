import React from "react";
import "./IncompleteTask.css";

const IncompleteTask = (props) => {
  const onChangeHandler = (event) => {
    props.onTaskChangeHandler(event.target.value);
  };

  return (
    <div className="taskWrapperIn">
      {props.inputedTasks
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
                label="black and white with default value"
              />
            </div>
          );
        })}
    </div>
  );
};

export default IncompleteTask;
