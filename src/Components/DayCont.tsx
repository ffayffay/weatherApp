import React from "react";
import { ForecastWeatherResponse } from "../Types";

interface DayContProps {
  weeklyWeather: ForecastWeatherResponse;
}

export const DayCont: React.FC<DayContProps> = ({ weeklyWeather }) => {
  return (
    <div className="day-cont">
      <h3>{weeklyWeather?.date}</h3>
      <div>
        <div className="img-cont">
          <img
            src={weeklyWeather?.day?.condition?.icon}
            alt={weeklyWeather?.day?.condition?.text}
          />
        </div>
        <h4>{weeklyWeather?.day?.condition?.text}</h4>
      </div>

      <div>
        <div>
          <p>Min Temp: {weeklyWeather?.day?.mintemp_f}</p>
        </div>
        <div>
          <p>Max Temp: {weeklyWeather?.day?.maxtemp_f}</p>
        </div>
      </div>
    </div>
  );
};
