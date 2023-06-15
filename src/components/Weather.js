import React, { useState } from "react";
import "../style/weather.css";
import DisplayWeather from "./DisplayWeather";

export default function Weather() {
  const APIKEY = "3d0e0067efc7568307f05d398910026d";

  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (form.sity === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        .then((response) => response.json())
        .then((data) => data);

      setWeather({
        data: data,
      });
    }
  }

  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }

    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}
