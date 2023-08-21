import { AirQuality, IGetCurrentWeatherResponse } from "../api/types/IGetCurrentWeather";
import { TypeLocation, TypeWeatherCondition, TypeWeatherTemp, TypeWeatherWind } from "./types";

export default interface IWeatherModel {
  getRawWeatherData(): IGetCurrentWeatherResponse;
  getLocation(): TypeLocation;
  getWeatherCondition(): TypeWeatherCondition;
  getWeatherTemp(): TypeWeatherTemp;
  getWeatherWind(): TypeWeatherWind;
  getIcon(): string;
  getAirQuality(): AirQuality & { epaDesc: string, defraDesc: { band: string, gm: string } };
}