import React, { useEffect, useState } from 'react';
import {CurrentWeatherResponse } from '../Types';
import { fetchCurrentWeather } from '../APIClient'

interface LocationInputProps {
  currentWeather: CurrentWeatherResponse;
  setCurrentWeather: (currentWeatherObj: CurrentWeatherResponse) => void;
  location: string;
  setLocation: (location: string) => void;
}

export const LocationInput:React.FC<LocationInputProps>= ({ currentWeather, setCurrentWeather, location, setLocation }) => {
  
  const fetchCurrent = () => {
    fetchCurrentWeather(location)
    .then((data) => setCurrentWeather(data))
  }

  const handleChange = (e: React.ChangeEvent<any>, setFn: React.Dispatch<React.SetStateAction<any>>) => {
    setFn(e.target.value);
  };



  return (
    <div>
      <input onChange={(e) => handleChange(e, setLocation)} value={location} type="text" placeholder="Location?" />
      <button onClick={fetchCurrent}>Current Weather</button>
    </div>
  )
}

// make component to show weather when page loads with browser location