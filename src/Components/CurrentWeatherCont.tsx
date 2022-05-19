import React from 'react';
import { CurrentWeatherResponse } from '../Types';

interface CurrentWeatherContProps {
  currentWeather: CurrentWeatherResponse;
}


export const CurrentWeatherCont: React.FC<CurrentWeatherContProps> = ({ currentWeather }) => {
  console.log(currentWeather)
  return (
    <div>
      <h1>{currentWeather?.location?.name}, {currentWeather?.location?.region}</h1>
      <div>
        <img src={currentWeather?.current?.condition?.icon} alt={currentWeather?.current?.condition?.text} />
      </div>
      <h3>{currentWeather?.current?.condition?.text}</h3>
      <h4>Temp: {currentWeather?.current?.temp_f} Farenheit</h4>
    </div>
  )
}

//Object { location: {…}, current: {…} }
// ​
// current: Object { last_updated_epoch: 1652818500, last_updated: "2022-05-17 16:15", temp_c: 28.9, … }
// ​​
// cloud: 50
// ​​
// condition: Object { text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png", code: 1003 }
// ​​​
// code: 1003
// ​​​
// icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
// ​​​
// text: "Partly cloudy"
// ​​​
// <prototype>: Object { … }
// ​​
// feelslike_c: 29.1
// ​​
// feelslike_f: 84.4
// ​​
// gust_kph: 15.8
// ​​
// gust_mph: 9.8
// ​​
// humidity: 30
// ​​
// is_day: 1
// ​​
// last_updated: "2022-05-17 16:15"
// ​​
// last_updated_epoch: 1652818500
// ​​
// precip_in: 0
// ​​
// precip_mm: 0
// ​​
// pressure_in: 29.99
// ​​
// pressure_mb: 1016
// ​​
// temp_c: 28.9
// ​​
// temp_f: 84
// ​​
// uv: 7
// ​​
// vis_km: 16
// ​​
// vis_miles: 9
// ​​
// wind_degree: 280
// ​​
// wind_dir: "W"
// ​​
// wind_kph: 11.2
// ​​
// wind_mph: 6.9
// ​​
// <prototype>: Object { … }
// ​
// location: Object { name: "Port Fulton", region: "Indiana", country: "United States of America", … }
// ​
// <prototype>: Object { … }
// LocationInput.tsx:24
