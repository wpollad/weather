import React from "react";
import "../style/displayweather.css";

export default function DisplayWeather(props) {
  const { data } = props;

  const urlIcon = `https://openweathermap.org/img/wn/${
    data.code !== 404 ? data.weather[0].icon : null
  }.png`;


  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name}, {data.sys.country}, Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>
            <h1>
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img src={urlIcon} className="weather-icon" alt="ups..." />
            <span className="weather-description">
              {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <thead>
                  <tr>
                    <td>
                      <h4>High/Low</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor(data.main.temp_max - 273.15)} /{" "}
                        {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup> C
                      </span>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <td>
                      <h4>Humidity</h4>
                    </td>
                    <td>
                      <span>{data.main.humidity} %</span>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <td>
                      <h4>Pressure</h4>
                    </td>
                    <td>
                      <span>{data.main.pressure} hPa</span>
                    </td>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <td>
                      <h4>Visisbility</h4>
                    </td>
                    <td>
                      <span>{data.visibility / 1000} Km</span>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="section2">
              <table>
                <thead>
                  {" "}
                  <tr>
                    <td>
                      <h4>Visisbility</h4>
                    </td>
                    <td>
                      <span>{data.visibility / 1000} Km</span>
                    </td>
                  </tr>
                </thead>
                <thead>
                  {" "}
                  <tr>
                    <td>
                      <h4>Wind Diraction</h4>
                    </td>
                    <td>
                      <span>
                        {data.wind.deg} <sup>o</sup> deg
                      </span>
                    </td>
                  </tr>
                </thead>
                <thead>
                  {" "}
                  <tr>
                    <td>
                      <h4>Sunrise</h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </thead>
                <thead>
                  {" "}
                  <tr>
                    <td>
                      <h4>Sunset</h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}
