import { useAppDispatch, useAppSelector } from "./storeHooks";
import { getCurrentWeather, getForecast } from "../features/weatherSlice";

const useFetchWeather = () => {
  const { loading, currentWeatherError } = useAppSelector(state => state.weathers);
  const dispatch = useAppDispatch();
  const fetchWeather = (location: string) => dispatch(getCurrentWeather(location));
  const fetchForecast = (location: string) => dispatch(getForecast(location, 5));
  return {
    loading,
    currentWeatherError,
    fetchWeather: fetchWeather,
    fetchForecast: fetchForecast,
  };
};

export default useFetchWeather;