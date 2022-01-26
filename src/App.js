import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./Components/AddTasks/AddTask";
import HomePage from "./Components/HomePage/HomePage";
import Tasks from "./Components/Tasks/Tasks";
import Error from "./Error/Error";
import ComponentTree from "./Assets/ComponentTree/ComponentTree";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/additems"
          element={
            <React.Fragment>
              <Tasks />
              <AddTask />
            </React.Fragment>
          }
        />
        <Route path="/shoppinglist" element={<Tasks />} />
        <Route path="*" element={<Error />} />
        <Route path="/abcd" element={<ComponentTree />} />
      </Routes>
    </div>
  );
}

export default App;
