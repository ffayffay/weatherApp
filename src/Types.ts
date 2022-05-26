export interface CurrentWeatherResponse {
  current: Current;
  location: Location;
}

export interface Current {
  condition: Condition;
  temp_f: number;
}

export interface Location {
  name: string;
  region: string;
}


export interface Condition {
  icon: string;
  text: string;
}

// --------------------------------

export interface ForecastWeatherResponse {
  date: string;
  day: Day;
}

export interface Day {
  maxtemp_f: number;
  mintemp_f: number;
  condition: Condition;
}

export interface Condition {
  icon: string;
  text: string;
}

// forecastday: Array(3)
// 0:
// astro: {sunrise: '06:27 AM', sunset: '08:52 PM', moonrise: '02:02 AM', moonset: '11:55 AM', moon_phase: 'Waning Gibbous', …}
// date: "2022-05-21"
// date_epoch: 1653091200
// day:
// avghumidity: 69
// avgtemp_c: 25.5
// avgtemp_f: 77.9
// avgvis_km: 9.7
// avgvis_miles: 6
// condition: {text: 'Moderate rain', icon: '//cdn.weatherapi.com/weather/64x64/day/302.png', code: 1189}
// daily_chance_of_rain: 89
// daily_chance_of_snow: 0
// daily_will_it_rain: 1
// daily_will_it_snow: 0
// maxtemp_c: 31.9
// maxtemp_f: 89.4
// maxwind_kph: 23.8
// maxwind_mph: 14.8
// mintemp_c: 21.1
// mintemp_f: 70
// totalprecip_in: 0.53
// totalprecip_mm: 13.5
// uv: 9