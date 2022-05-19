import React, { useEffect, useState } from 'react';
import useEffectOnce from '../hooks/useEffectOnce';
import {CurrentWeatherResponse } from '../Types';

interface LocationInputProps {
  currentWeather: CurrentWeatherResponse;
  setCurrentWeather: (currentWeatherObj: CurrentWeatherResponse) => void;
}

export const LocationInput:React.FC<LocationInputProps>= ({ currentWeather, setCurrentWeather }) => {
  
  const [location, setLocation] = useState("");
  const [browserLoc, setBrowserLoc] = useState<any>({});

  const baseUrl = 'http://api.weatherapi.com/v1';
  const key = '397acc8ee0e44011a76162011221305';

  useEffectOnce(() => {
    if (window.navigator) {
      navigator.geolocation.getCurrentPosition(setBrowserLoc)
    }
  });

  useEffect(() => {
    if (browserLoc?.coords?.latitude)
      setLocation(`${browserLoc?.coords?.latitude},${browserLoc?.coords?.longitude}`);
  }, [browserLoc])

  const fetchCurrent = () => {
    fetch(`${baseUrl}/current.json?key=${key}&q=${location}`)
    .then((res) => res.json())
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