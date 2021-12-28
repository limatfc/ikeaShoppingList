import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TasksContext from "../../store/tasks-context";
import "./AddForm.css";
import ButtonAST from "./ButtonAST";

const AddForm = () => {
  const navigate = useNavigate();
  const tasksCtx = useContext(TasksContext);
  const [nameInputedData, setNameInputedData] = useState("");
  const [priceInputedData, setPriceInputedData] = useState("0.00");

  const onNameChange = (event) => {
    setNameInputedData(event.target.value);
  };

  const onPriceChange = (event) => {
    let price = event.target.value;
    price = Number(price).toFixed(2);
    setPriceInputedData(price);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const allInputedDataArray = {
      name: nameInputedData,
      price: priceInputedData,
    };
    tasksCtx.inputedItemsHandler(allInputedDataArray);
    navigate("/shoppinglist");
  };

  return (
    <React.Fragment>
      <form className="formAdd" onSubmit={submitHandler}>
        <div className="inputForm">
          <label className="font">Product (name)</label>
          <input onChange={onNameChange} type="text"></input>
          <br></br>
          <label className="font">Price ($)</label>
          <input onChange={onPriceChange} type="number"></input>
        </div>
        <ButtonAST />
      </form>
    </React.Fragment>
  );
};

export default AddForm;
