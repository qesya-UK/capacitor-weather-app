import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import WeatherModel from "../domain/WeatherModel";
import ForecastModel from "../domain/ForecastModel";


const useLoadWeatherList = (loadImmediately = true) => {
  const { currentWeatherData, forecastData } = useAppSelector(state => state.weathers);
  let weather: WeatherModel | undefined;
  let forecast: ForecastModel | undefined;
  if (currentWeatherData && forecastData) {
    weather = currentWeatherData;
    forecast = forecastData;
  }

  return{
    weather,
    forecast,
  }
};


export default useLoadWeatherList;