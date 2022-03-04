export const toggleStatusScript = (inputedTasksState, keyValue) => {
  const copyInputedTasks = [...inputedTasksState];
  const find = copyInputedTasks.find((itemKey) => itemKey.key === keyValue);
  find.status === "incomplete"
    ? (find.status = "complete")
    : (find.status = "incomplete");
  return copyInputedTasks;
};
