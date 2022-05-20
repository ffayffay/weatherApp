const baseUrl = 'http://api.weatherapi.com/v1';
const key = '397acc8ee0e44011a76162011221305';

export const fetchCurrentWeather = (location: string) => {
  const data = fetch(`${baseUrl}/current.json?key=${key}&q=${location}`)
  .then((res) => res.json())
  return data
}


export const fetchCurrentWeatherViaBrowser = (browserLoc: any) => {
  const data = fetch(`${baseUrl}/current.json?key=${key}&q=${browserLoc?.coords?.latitude},${browserLoc?.coords?.longitude}`)
  .then((res) => res.json())
  return data
}

export const fetchForecast = (location: any) => {
  const data = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7`)
  .then((res) => res.json())
  return data
}