export const sortByNameHook = (inputedTasksState) => {
  const copyInputedTasks = [...inputedTasksState];
  const sortedName = copyInputedTasks.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedName;
};

export const sortByPriceHook = (inputedTasksState) => {
  const copyInputedTasks = [...inputedTasksState];
  const sortedPrice = copyInputedTasks.sort((a, b) => {
    return a.price - b.price;
  });
  return sortedPrice;
};
