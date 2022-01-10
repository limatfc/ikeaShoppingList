import React from "react";

const TasksContext = React.createContext({
  inputedTasks: [],
  inputedTaskHandler: (items) => {},
  onTaskChangeHandler: (item) => {},
  sortByName: () => {},
  sortByPrice: () => {},
});

export default TasksContext;
