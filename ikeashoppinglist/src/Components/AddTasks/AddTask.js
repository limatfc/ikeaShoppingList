import React from "react";
import ReactDOM from "react-dom";
import AddForm from "./AddForm/AddForm";
import "./AddTask.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

export const ModalOverlayer = () => {
  return (
    <div className="modal-overlayer">
      <h1 className="titleaddscreen">Add Shopping Items</h1>
      <AddForm />
    </div>
  );
};

const AddTask = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlayer-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlayer />,
        document.getElementById("overlayer-root")
      )}
    </React.Fragment>
  );
};

export default AddTask;