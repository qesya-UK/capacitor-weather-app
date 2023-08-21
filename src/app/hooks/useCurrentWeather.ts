import WeatherModel from "../domain/WeatherModel";
import { LOADING } from "../features/weatherSlice";
import { useAppSelector } from "./storeHooks";


const useCurrentWeather = () => {
  const { currentWeatherData, loading } = useAppSelector(state => state.weathers);

  let weather: WeatherModel | undefined;

  if (currentWeatherData) {
    weather = currentWeatherData;
  }

  return weather;
};

export default useCurrentWeather;