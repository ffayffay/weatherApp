import React, { useState } from 'react';
import './App.css';
import { LocationInput } from './Components/LocationInput';
import { CurrentWeatherCont } from './Components/CurrentWeatherCont';

function App() {

const [currentWeather, setCurrentWeather] = useState({}); 

  return (
    <div className="App">
      <LocationInput  />
      <CurrentWeatherCont />
    </div>
  );
}

export default App;
