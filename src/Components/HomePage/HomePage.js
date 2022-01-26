import React from "react";
import "./HomePage.css";
import IkeaLogo from "./IkeaLogo/IkeaLogo";
import Summary from "./Summary/Summary";
import Button from "../Button/Button";
import HomePageImage from "./HomePageImage/HomePageImage";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapperHomePage">
      <IkeaLogo />
      <HomePageImage />
      <Summary />
      <Button
        onClickHandler={() => {
          navigate("/additems");
        }}
      >
        Add Items
      </Button>
    </div>
  );
};

export default HomePage;
