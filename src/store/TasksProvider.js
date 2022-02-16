import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TasksContext from "./tasks-context";

// This file is too long -1
// We would explain how to break it into 2 files the Context and the reducer during class
const TasksProvider = (props) => {
  const [inputedTasks, setInputedTasks] = useState([]);
  const navigate = useNavigate();

  // This is too long, you need to refactor it
  const getLocalData = () => {
    const getLocalData = localStorage.getItem("storedInputedTasks");
    const localData = JSON.parse(getLocalData) || [];
    setInputedTasks(localData);
  };

  const navigationHandler = () => {
    if (inputedTasks.length > 0) {
      navigate("/shoppinglist");
    } else if (inputedTasks.length === 0) {
      navigate("/");
    }
  };

  useEffect(getLocalData, []);

  useEffect(navigationHandler, [navigate, inputedTasks]);

  useEffect(() => {
    localStorage.setItem("storedInputedTasks", JSON.stringify(inputedTasks));
  }, [inputedTasks]);

  const inputedTaskHandler = (items) => {
    setInputedTasks((prevItems) => {
      return [items, ...prevItems];
    });
  };

  const onTaskChangeHandler = (keyValue) => {
    const copyInputedTasks = [...inputedTasks];
    const find = copyInputedTasks.find((itemKey) => itemKey.key === keyValue);
    find.status === "incomplete"
      ? (find.status = "complete")
      : (find.status = "incomplete");
    setInputedTasks(copyInputedTasks);
  };

  const sortByName = () => {
    const copyInputedTasks = [...inputedTasks];
    const sortedName = copyInputedTasks.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setInputedTasks(sortedName);
  };

  const sortByPrice = () => {
    const copyInputedTasks = [...inputedTasks];
    const sortedPrice = copyInputedTasks.sort((a, b) => {
      return a.price - b.price;
    });
    setInputedTasks(sortedPrice);
  };

  const taskContext = {
    inputedTasks,
    inputedTaskHandler: inputedTaskHandler,
    onTaskChangeHandler: onTaskChangeHandler,
    sortByName: sortByName,
    sortByPrice: sortByPrice,
  };

  return (
    <TasksContext.Provider value={taskContext}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
