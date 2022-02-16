import React from "react";
import ReactDOM from "react-dom";
import AddForm from "./addForm/AddForm";
import "./AddTask.css";

//move this to another file?
const ModalOverlayer = (props) => {
  return (
    <div>
      <div onClick={props.showModalHandler} className="backdrop"></div>
      <div className="modal-overlayer">
        <h1 className="title-addscreen">Add Shopping Items</h1>
        <AddForm showModalHandler={props.showModalHandler} />
      </div>
    </div>
  );
};

const AddTask = (props) => {
  return (
    <div role="dialog">
      {ReactDOM.createPortal(
        <ModalOverlayer showModalHandler={props.showModalHandler} />,
        document.getElementById("overlayer-root")
      )}
    </div>
  );
};

export default AddTask;
