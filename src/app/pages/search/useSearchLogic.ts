import { LOADING } from "../../features/weatherSlice";
import { useAppSelector } from "../../hooks/storeHooks";
import useFetchWeather from "../../hooks/useFetchWeather";

const useSearchLogic = (f7router: any) => {
  const { currentWeatherData, forecastData } = useAppSelector(state => state.weathers);

  const { loading, fetchWeather, fetchForecast } = useFetchWeather();

  const handleSearch = (text: string) => {
    if (text?.length > 0) {
      fetchWeather(text);
      fetchForecast(text);
      f7router.navigate('/weather/');
    }
  };

  return {
    weathers: currentWeatherData,
    forecast: forecastData,
    handleSearch,
  };

};

export default useSearchLogic;