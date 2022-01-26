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
