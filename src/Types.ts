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