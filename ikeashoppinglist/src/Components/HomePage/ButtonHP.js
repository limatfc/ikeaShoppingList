import React from "react";
import { useNavigate } from "react-router-dom";
import "../Helpers/Button.css";

const ButtonHP = () => {
  const navigate = useNavigate();

  return (
    <button
      className="button"
      onClick={() => {
        navigate("/additems");
      }}
    >
      Add a new item
    </button>
  );
};

export default ButtonHP;
