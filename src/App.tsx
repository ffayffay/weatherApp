import React, { useState, useEffect } from "react";
import "./App.css";
import { LocationInput } from "./Components/LocationInput";
import { CurrentWeatherCont } from "./Components/CurrentWeatherCont";
import { CurrentWeatherResponse, ForecastWeatherResponse } from "./Types";
import useEffectOnce from "./hooks/useEffectOnce";
import {
  fetchCurrentWeatherViaBrowser,
  fetchForecastViaLocation,
  fetchForecastViaBrowser,
} from "./APIClient";
import { ForecastCont } from "./Components/ForecastCont";

function App() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResponse>(
    {} as CurrentWeatherResponse
  );
  const [weeklyWeather, setWeeklyWeather] = useState<ForecastWeatherResponse[]>([]);
  const [location, setLocation] = useState<string>("");
  const [browserLoc, setBrowserLoc] = useState<any>();

  useEffectOnce(() => {
    if (window.navigator) {
      navigator.geolocation.getCurrentPosition(setBrowserLoc);
    }
  });

  useEffect(() => {
    if (browserLoc) {
      fetchCurrentWeatherViaBrowser(browserLoc).then((data) =>
        setCurrentWeather(data)
      );
    }
  }, [browserLoc]);
  

  useEffect(() => {
    if (location.length > 0) {
      fetchForecastViaLocation(location)
      // .then((data) => console.log("forecast", data.forecast.forecastday))
      .then((data) => {setWeeklyWeather(data.forecast.forecastday); return data})
      .then((weeklyWeather) => console.log("forecast:", weeklyWeather))
    } else if (browserLoc) {
      fetchForecastViaBrowser(browserLoc)
        // .then((data) => console.log("forecast", data.forecast.forecastday))
        .then((data) => { setWeeklyWeather(data.forecast.forecastday); return data.forecast.forecastday })
        .then((weeklyWeather) => console.log("weekly weather:", weeklyWeather))
    }
  }, [browserLoc, location]);

  return (
    <div className="App">
      <LocationInput
        setCurrentWeather={setCurrentWeather}
        currentWeather={currentWeather}
        location={location}
        setLocation={setLocation}
      />
      <CurrentWeatherCont currentWeather={currentWeather} />
      {weeklyWeather ? <ForecastCont
        location={location}
        browserLoc={browserLoc}
        weeklyWeather={weeklyWeather}
      /> : <h2>No Weekly Forecast</h2>}
    </div>
  );
}

export default App;
