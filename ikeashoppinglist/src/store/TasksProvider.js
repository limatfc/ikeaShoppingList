import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TasksContext from "./tasks-context";

const TasksProvider = (props) => {
  const [nonCompletedItems, setnonCompletedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const navigate = useNavigate();

  const getLocalData = () => {
    const getLocalData = localStorage.getItem("storedNonCompletedtems");
    const localData = JSON.parse(getLocalData);
    if (localData.length > 0) {
      setnonCompletedItems(localData);
      navigate("/shoppinglist");
    }
    if (localData.length === 0) {
      navigate("/");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getLocalData, []);

  useEffect(() => {
    localStorage.setItem(
      "storedNonCompletedtems",
      JSON.stringify(nonCompletedItems)
    );
  }, [nonCompletedItems]);

  const inputedItemsHandler = (items) => {
    setnonCompletedItems((prevItems) => {
      return [items, ...prevItems];
    });
  };

  const deleteNonCompleteItemHandler = (index) => {
    setnonCompletedItems((prevItems) => {
      const copyNonCompletedItems = [...prevItems];
      copyNonCompletedItems.splice(index, 1);
      return copyNonCompletedItems;
    });
  };

  const completedItemsHandler = (index) => {
    const clickedItem = nonCompletedItems[index];
    setCompletedItems((prevClickedItem) => {
      return [clickedItem, ...prevClickedItem];
    });
  };

  const sortByName = () => {
    const copyNonCompletedItems = [...nonCompletedItems];
    const sortedName = copyNonCompletedItems.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setnonCompletedItems(sortedName);
  };

  const sortByPrice = () => {
    const copyNonCompletedItems = [...nonCompletedItems];
    const sortedPrice = copyNonCompletedItems.sort((a, b) => {
      return a.price - b.price;
    });
    setnonCompletedItems(sortedPrice);
  };

  const taskContext = {
    nonCompletedItems,
    inputedItemsHandler: inputedItemsHandler,
    completedItems,
    completedItemsHandler: completedItemsHandler,
    deleteNonCompleteItemHandler: deleteNonCompleteItemHandler,
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
