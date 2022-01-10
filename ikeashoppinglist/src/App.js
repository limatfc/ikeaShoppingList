import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddShoppingTask from "./Components/AddShoppingTasks/AddShoppingTask";
import HomePage from "./Components/HomePage/HomePage";
import ShoppingTasks from "./Components/Tasks/ShoppingTasks";
import Error from "./Error/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/additems"
          element={
            <React.Fragment>
              <ShoppingTasks />
              <AddShoppingTask />
            </React.Fragment>
          }
        />
        <Route path="/shoppinglist" element={<ShoppingTasks />} />
        <Route path="*" element={Error} />
      </Routes>
    </div>
  );
}

export default App;
