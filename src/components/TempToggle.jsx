import { useState } from "react";
import "../styles/TempToggle.css";

const TempToggle = ({ onHandleToggle, isCelsius }) => {
  return (
    <div className="switchContainer">
      <button
        className={`switch ${isCelsius ? "active" : ""}`}
        onClick={() => onHandleToggle(!isCelsius)}
      >
        {isCelsius ? "°C" : "°F"}
      </button>
    </div>
  );
};

export default TempToggle;
