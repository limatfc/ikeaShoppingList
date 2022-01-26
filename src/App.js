import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./Components/AddTasks/AddTask";
import HomePage from "./Components/HomePage/HomePage";
import Tasks from "./Components/Tasks/Tasks";
import Error from "./Error/Error";
import ComponentTree from "./Assets/ComponentTree/ComponentTree";

// you can put the export default here...

/**
 * Folder file names
 * Folders should be lowercase not uppercase (follow the convention you see on the create-react-app)
 * Written here because i cannot write comments on the folders themselves
 */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Fragment -1 */}
        {/* If you need to create a new page called FormPage, do so instead of using fragments */}
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
        {/* Interesting, but not neccesary */}
        <Route path="/abcd" element={<ComponentTree />} />
      </Routes>
    </div>
  );
}

// ... to avoid a second line here
export default App;
