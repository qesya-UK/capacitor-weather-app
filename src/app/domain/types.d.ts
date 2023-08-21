export type TypeWeatherCondition = {
  text: string;
  icon: string;
  code: number;
};

export type TypeLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export type TypeWeatherTemp = {
  celcius: number;
  feelslike_c: number;
  fahrenheit: number;
  feelslike_f: number;
}

export type TypeWeatherWind = {
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
}