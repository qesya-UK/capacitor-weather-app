import { Astro, Day, Forecast, Hour, IForecastResponse } from "../api/types/IGetCurrentForecast";
import { IGetCurrentWeatherResponse } from "../api/types/IGetCurrentWeather";
import { TypeLocation, TypeWeatherCondition, TypeWeatherTemp, TypeWeatherWind } from "./types";

export default interface IForecastModel {
  getRawForecastData(): IForecastResponse;
  getForecast(): Forecast;
  getForecastDay(): Array<Day>;
  getForecastAstro(): Array<Astro>;
  getForecastHour(): Hour[][];
}