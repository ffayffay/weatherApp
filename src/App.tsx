import React, { useState, useEffect } from "react";
import "./App.css";
import { LocationInput } from "./Components/LocationInput";
import { CurrentWeatherCont } from "./Components/CurrentWeatherCont";
import { CurrentWeatherResponse } from "./Types";
import useEffectOnce from "./hooks/useEffectOnce";
import { fetchCurrentWeatherViaBrowser } from "./APIClient";

function App() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherResponse>(
    {} as CurrentWeatherResponse
  );

  const baseUrl = "http://api.weatherapi.com/v1";
  const key = "397acc8ee0e44011a76162011221305";
  const [location, setLocation] = useState<string>("");
  const [browserLoc, setBrowserLoc] = useState<any>({});

  useEffectOnce(() => {
    if (window.navigator) {
      navigator.geolocation.getCurrentPosition(setBrowserLoc);
    }
  });

  useEffect(() => {
    if (browserLoc) {
      fetchCurrentWeatherViaBrowser(browserLoc)
      .then((data) => setCurrentWeather(data)
      );
    }
  }, [browserLoc]);

  return (
    <div className="App">
      <LocationInput
        setCurrentWeather={setCurrentWeather}
        currentWeather={currentWeather}
        location={location}
        setLocation={setLocation}
      />
      <CurrentWeatherCont currentWeather={currentWeather} />
    </div>
  );
}

export default App;
