import React from "react";
import { DayCont } from "./DayCont";
import { ForecastWeatherResponse } from '../Types';

interface ForecastContProps {
  location: string;
  browserLoc: any;
  weeklyWeather: ForecastWeatherResponse[];
}

export const ForecastCont: React.FC<ForecastContProps> = ({ location, browserLoc, weeklyWeather }) => {
return (
    <div className="forecast-cont">
     { weeklyWeather.map((day: ForecastWeatherResponse, idx) => ( <DayCont weeklyWeather={day} key={idx + 1} />))}
    </div>
  )
}
