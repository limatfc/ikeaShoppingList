import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TasksContext from "./tasks-context";

const TasksProvider = (props) => {
  const [inputedTasks, setInputedTasks] = useState([]);
  const navigate = useNavigate();

  const getLocalData = () => {
    const getLocalData = localStorage.getItem("storedInputedTasks");
    const localData = JSON.parse(getLocalData);
    if (localData && localData.length > 0) {
      console.log("aaaa");
      localData.find((incompleteTask) => {
        if (incompleteTask.status === "incomplete") {
          navigate("/shoppinglist");
          setInputedTasks(localData);
          console.log("bbbbbb");
        } else {
          navigate("/");
          setInputedTasks(localData);
          console.log("cccccc");
        }
        return incompleteTask.status === "incomplete";
      });
    }
    if (!localData || localData.length === 0) {
      navigate("/");
      console.log("dddd");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getLocalData, []);

  useEffect(() => {
    localStorage.setItem("storedInputedTasks", JSON.stringify(inputedTasks));
  }, [inputedTasks]);

  const inputedTaskHandler = (items) => {
    setInputedTasks((prevItems) => {
      return [items, ...prevItems];
    });
  };

  const onTaskChangeHandler = (keyValue) => {
    setInputedTasks((prevItems) => {
      const copyPrevItems = [...prevItems];
      const find = copyPrevItems.find((itemKey) => itemKey.key === keyValue);
      find.status = "complete";
      return [...copyPrevItems];
    });
  };

  const sortByName = () => {
    const copyNonCompletedItems = [...inputedTasks];
    const sortedName = copyNonCompletedItems.sort((a, b) => {
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
    const copyNonCompletedItems = [...inputedTasks];
    const sortedPrice = copyNonCompletedItems.sort((a, b) => {
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
