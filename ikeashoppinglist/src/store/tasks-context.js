import React from "react";

const TasksContext = React.createContext({
  nonCompletedItems: [],
  inputedItemsHandler: (items) => {},
  completedItems: [],
  completedItemsHandler: (index) => {},
  deleteNonCompleteItemHandler: (index) => {},
  sortByName: () => {},
  sortByPrice: () => {},
});

export default TasksContext;
