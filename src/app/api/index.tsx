import axios from 'axios';
import IWeatherApi from './IWeatherAPI';
import { IGetCurrentWeatherResponse } from './types/IGetCurrentWeather';
import { IForecastResponse } from './types/IGetCurrentForecast';

export default class WeatherAPI implements IWeatherApi {
  private readonly API_KEY;
  private readonly BASE_URL = `https://api.weatherapi.com`;
  private readonly CURRENT_WEATHER = `/v1/forecast.json`;
  private readonly FORECAST = `/v1/forecast.json`;

  constructor(apiKey: string) {
    this.API_KEY = apiKey;
  }

  async getCurrentWeather(location: string): Promise<IGetCurrentWeatherResponse> {
    const getCurrentWeatherURL = `${this.BASE_URL}${this.CURRENT_WEATHER}?key=${this.API_KEY}&q=${location}&days=1&aqi=yes&alerts=no`;
    const currentWeather = (await axios.get(getCurrentWeatherURL)).data;
    return currentWeather;
  }

  async getForecast(location: string, days: number): Promise<IForecastResponse> {
    const geForecastURL = `${this.BASE_URL}${this.FORECAST}?key=${this.API_KEY}&q=${location}&days=${days}&aqi=yes&alerts=no`;
    const forecast = (await axios.get(geForecastURL)).data;
    return forecast;
  }
}