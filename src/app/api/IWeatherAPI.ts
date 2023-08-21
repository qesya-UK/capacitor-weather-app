import { IForecastResponse } from "./types/IGetCurrentForecast";
import { IGetCurrentWeatherResponse } from "./types/IGetCurrentWeather";

export default interface IWeatherApi {
  getCurrentWeather(location: string): Promise<IGetCurrentWeatherResponse>;
  getForecast(location: string, days: number): Promise<IForecastResponse>;
}