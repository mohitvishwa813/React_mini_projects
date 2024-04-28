import React from "react";
import "./index.css";
import React, { useState } from "react";
export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(13);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);
    if (newTemperature > 15) {
      setTemperatureColor("hot");
    }
  };
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`} cold>
          {temperatureValue} C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>

        <button
          onClick={decreaseTemperature }>  -
        </button>
      </div>
    </div>
  );
}
