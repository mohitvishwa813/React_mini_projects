import React, { useEffect, useState } from "react";
import "./App.css";

export default function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "India",
    regin: "madhya pradesh",
  });

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleNameSubmit = () => {
    fetchData(input);
    console.log(input)
  };

  useEffect(() => {
    fetchData(); // Fetch data on initial render
  }, []); // Fetch data only on initial render

  const fetchData = (city = "indore") => {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=c743b570eaa34ddf8d383555242204&q=${city}&aqi=no`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData)
        setData({
          celcius: jsonData.current.temp_c,
          name: jsonData.location.name,
          regin:jsonData.location.region
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={handleNameSubmit}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="winfo">
          <div className="images">
            <img
              src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-1024.png"
              alt=""
            />
          </div>
          <h1>{data.celcius} °C</h1>
          <h2>{data.name}</h2>
          <h3>{data.regin}</h3>
        </div>
      </div>
    </div>
  );
}
