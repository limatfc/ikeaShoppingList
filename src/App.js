import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./components/addTasks/AddTask";
import HomePage from "./components/homePage/HomePage";
import Tasks from "./components/tasks/Tasks";
import Error from "./error/Error";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      {showModal && <AddTask showModalHandler={showModalHandler} />}
      <Routes>
        <Route
          path="/"
          element={<HomePage showModalHandler={showModalHandler} />}
        />
        ) (
        <Route
          path="/shoppinglist"
          element={<Tasks showModalHandler={showModalHandler} />}
        />
        )
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
