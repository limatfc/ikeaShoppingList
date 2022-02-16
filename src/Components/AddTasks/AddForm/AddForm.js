import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TasksContext from "../../../store/tasks-context";
import "./AddForm.css";
import imageDefault from "../../../assets/images/ImageDefault.jpeg";
import Button from "../../button/Button";
import { v4 as uuidv4 } from "uuid";

const AddForm = (props) => {
  const navigate = useNavigate();
  const tasksCtx = useContext(TasksContext);
  const [nameInputedData, setNameInputedData] = useState("");
  const [priceInputedData, setPriceInputedData] = useState();

  const onNameChange = (event) => {
    setNameInputedData(event.target.value);
  };

  const onPriceChange = (event) => {
    setPriceInputedData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const allInputedDataArray = {
      name: nameInputedData,
      price: priceInputedData,
      status: "incomplete",
      imageLink: imageDefault,
      key: uuidv4(),
    };
    tasksCtx.inputedTaskHandler(allInputedDataArray);
    props.showModalHandler();
    navigate("/shoppinglist");
  };

  return (
    <form className="form-add" onSubmit={submitHandler}>
      <div className="input-form">
        <label className="font">Product (name)</label>
        <input
          onChange={onNameChange}
          placeholder="Product's name"
          type="text"
          required={true}
          className="input-font"
        ></input>
        <br></br>
        <label className="font">Price (SEK)</label>
        <input
          min="1"
          step=".01"
          placeholder="0.00"
          onChange={onPriceChange}
          type="number"
          required={true}
          className="input-font"
        ></input>
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddForm;
