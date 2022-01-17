import React from "react";
import "./CompleteTask.css";

const CompleteTask = (props) => {
  return (
    <div className="taskWrapperCom">
      {props.inputedTasks
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
              label="black and white"
            />
          </div>
        ))}
    </div>
  );
};

export default CompleteTask;
