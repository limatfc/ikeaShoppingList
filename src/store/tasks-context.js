import React from "react";

// This one could be putted on the TaskProvider file but is ok to have separate as well
const TasksContext = React.createContext({
  inputedTasks: [],
  inputedTaskHandler: (items) => {},
  toggleStatus: (item) => {},
  sortByName: () => {},
  sortByPrice: () => {},
  editImageLink: (item) => {},
});

export default TasksContext;
