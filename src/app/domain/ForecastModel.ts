import { IForecastResponse, Forecast, Day, Astro, Hour } from "../api/types/IGetCurrentForecast";
import IForecastModel from "./IForecastModel";

export default class ForecastModel implements IForecastModel {
  private readonly data: IForecastResponse;

  constructor(forecastData: IForecastResponse) {
    this.data = forecastData;
  }

  getRawForecastData(): IForecastResponse {
    return this.data;
  }
  
  getForecast(): Forecast {
    return this.data.forecast;
  }

  getForecastDay(): Array<Day> {
    return this.data.forecast.forecastday.map((day) => day.day);
  }

  getForecastAstro(): Array<Astro> {
    return this.data.forecast.forecastday.map((astro) => astro.astro);
  }

  getForecastHour(): Hour[][] {
    return this.data.forecast.forecastday.map((hour) => hour.hour);
  }
}