import React, { useContext } from "react";
import TasksContext from "../../store/tasks-context";
import "./NonCompletedItems.css";

const NonCompletedItems = () => {
  const ctxTask = useContext(TasksContext);

  const onChangeHandler = (event) => {
    ctxTask.completedItemsHandler(event.target.value);
    ctxTask.deleteNonCompleteItemHandler(event.target.value);
  };
  return (
    <div className="taskWrapperNon">
      {ctxTask.nonCompletedItems.map((item, i) => {
        return (
          <div key={i} className="taskitemsNon">
            <label>
              <input
                onChange={onChangeHandler}
                type="checkbox"
                key={i}
                value={i}
              ></input>
              <span>{` ${item.name}, ${item.price}`}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default NonCompletedItems;
