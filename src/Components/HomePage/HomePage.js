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
    // use wrapper-home-page as the name using dashes to separate words, thats the correct CSS nomenclature.
    <div className="wrapperHomePage">
      <IkeaLogo />
      <HomePageImage />
      <Summary />
      {/* You can make the button 1 line by removing the extra {} around navigate("/additems") */}
      <Button onClickHandler={() => navigate("/additems")}>Add Items</Button>
    </div>
  );
};

export default HomePage;
