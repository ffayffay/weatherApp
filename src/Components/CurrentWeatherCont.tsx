import React from "react";
import { CurrentWeatherResponse } from "../Types";

interface CurrentWeatherContProps {
  currentWeather: CurrentWeatherResponse;
}

export const CurrentWeatherCont: React.FC<CurrentWeatherContProps> = ({
  currentWeather,
}) => {
  console.log(currentWeather);
  return (
    <div className="current-cont">
      <h1>
        {currentWeather?.location?.name}, {currentWeather?.location?.region}
      </h1>
      <div className="currently">
      <div className="current-img current-item">
            <img
              src={currentWeather?.current?.condition?.icon}
              alt={currentWeather?.current?.condition?.text}
            />
          </div>
        <div className="current-main-items">
         
          <div className="block">
            <h1 className="current-item block">
              {currentWeather?.current?.temp_f}&#176;
            </h1>
            <h2 className="current-item block">
              {currentWeather?.current?.condition?.text}
            </h2>
            <div className="current-sub-items">
              <span><span>Feels Like: </span>{currentWeather?.current?.feelslike_f}&#176;</span>
              <span><span>Humidity: </span>{currentWeather?.current?.humidity}%</span>
              <span><span>Wind: </span>{currentWeather?.current?.wind_mph}MPH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
