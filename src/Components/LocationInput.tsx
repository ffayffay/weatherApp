import React, { useEffect, useState } from 'react';
import useEffectOnce from '../hooks/useEffectOnce';

export const LocationInput:React.FC= () => {
  
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
    .then((data) => console.log(data))
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
// Object { location: {…}, current: {…} }
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

​