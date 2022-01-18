import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TasksContext from "../../../store/tasks-context";
import "./AddForm.css";
import imageDefault from "../../../Assets/Images/imageDefault.jpeg";
import Button from "../../Button/Button";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
  const navigate = useNavigate();
  const tasksCtx = useContext(TasksContext);
  const [nameInputedData, setNameInputedData] = useState("");
  const [priceInputedData, setPriceInputedData] = useState();

  const onNameChange = (event) => {
    const inputedName = event.target.value;
    if (inputedName.trim().length > 0) {
      const camelCaseName = inputedName[0].toUpperCase() + inputedName.slice(1);
      setNameInputedData(camelCaseName);
    }
  };

  const onPriceChange = (event) => {
    let inputedPrice = event.target.value;
    if (inputedPrice.trim().length > 0) {
      inputedPrice = Number(inputedPrice).toFixed(2);
      setPriceInputedData(inputedPrice);
    }
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
    navigate("/shoppinglist");
  };

  return (
    <React.Fragment>
      <form className="formAdd" onSubmit={submitHandler}>
        <div className="inputForm">
          <label className="font">Product (name)</label>
          <input
            onChange={onNameChange}
            placeholder="Product's name"
            type="text"
            required={true}
            className="inputFont"
          ></input>
          <br></br>
          <label className="font">Price (SEK)</label>
          <input
            min="0"
            step=".01"
            placeholder="0.00"
            onChange={onPriceChange}
            type="number"
            required={true}
            className="inputFont"
          ></input>
        </div>
        <Button type="submit">Add</Button>
      </form>
    </React.Fragment>
  );
};

export default AddForm;
