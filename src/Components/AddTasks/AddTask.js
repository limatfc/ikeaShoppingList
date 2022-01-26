import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import AddForm from "./AddForm/AddForm";
import "./AddTask.css";

const Backdrop = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/shoppinglist");
      }}
      className="backdrop"
    ></div>
  );
};

// You can move this ones as separate files, this one makes more sense as a separate file than the IKEA logo
export const ModalOverlayer = () => {
  return (
    <div className="modal-overlayer">
      <h1 className="titleaddscreen">Add Shopping Items</h1>
      <AddForm />
    </div>
  );
};

const AddTask = () => {
  // Again fragment -1
  // Double portal -1
  // You dont need to 2 portals, you can use 1 and put both Backdrop and ModalOverlayer inside a <div role="modal">
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
