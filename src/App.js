import React, { useState, useContext } from "react";

import "./App.css";
import AddTask from "./components/addTasks/AddTask";
import HomePage from "./components/homePage/HomePage";
import Tasks from "./components/tasks/Tasks";

import TasksContext from "./store/tasks-context";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const ctxTasks = useContext(TasksContext);
  const { inputedTasks } = ctxTasks;

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      {showModal && <AddTask showModalHandler={showModalHandler} />}
      {inputedTasks.length === 0 && (
        <HomePage showModalHandler={showModalHandler} />
      )}
      {inputedTasks.length !== 0 && (
        <Tasks showModalHandler={showModalHandler} />
      )}
    </div>
  );
}
