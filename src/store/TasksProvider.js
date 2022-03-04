import React, { useState, useEffect } from "react";
import TasksContext from "./tasks-context";
import { sortByNameHook, sortByPriceHook } from "../components/scripts/sort-by";
import { toggleStatusScript } from "../components/scripts/toggle-status";

const TasksProvider = (props) => {
  const [inputedTasks, setInputedTasks] = useState([]);

  const getLocalData = () => {
    const getLocalData = localStorage.getItem("storedInputedTasks");
    const localData = JSON.parse(getLocalData) || [];
    setInputedTasks(localData);
  };

  useEffect(getLocalData, []);

  useEffect(() => {
    localStorage.setItem("storedInputedTasks", JSON.stringify(inputedTasks));
  }, [inputedTasks]);

  const inputedTaskHandler = (items) => {
    setInputedTasks((prevItems) => {
      return [items, ...prevItems];
    });
  };

  const toggleStatus = (keyValue) => {
    const setStatus = toggleStatusScript(inputedTasks, keyValue);
    setInputedTasks(setStatus);
  };

  const sortByName = () => {
    const sortedName = sortByNameHook(inputedTasks);
    setInputedTasks(sortedName);
  };

  const sortByPrice = () => {
    const sortedPrice = sortByPriceHook(inputedTasks);
    setInputedTasks(sortedPrice);
  };

  const editImageLink = (key, imageLink) => {
    const copyInputedTasks = [...inputedTasks];
    const foundItem = copyInputedTasks.find((item) => item.key === key);
    foundItem.imageLink = imageLink;
    setInputedTasks(copyInputedTasks);
  };

  const taskContext = {
    inputedTasks,
    inputedTaskHandler: inputedTaskHandler,
    toggleStatus: toggleStatus,
    sortByName: sortByName,
    sortByPrice: sortByPrice,
    editImageLink: editImageLink,
  };

  return (
    <TasksContext.Provider value={taskContext}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
