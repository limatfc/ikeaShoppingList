import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./assets/fonts/NotoSans-Regular.ttf";
import TasksProvider from "./store/TasksProvider";

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
