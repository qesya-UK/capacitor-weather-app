import ForecastModel from "../domain/ForecastModel";
import { LOADING } from "../features/weatherSlice";
import { useAppSelector } from "./storeHooks";

const useGetForecast = () => {
  const { forecastData, loading } = useAppSelector(state => state.weathers);

  let forecast: ForecastModel | undefined;

  if (forecastData) {
    forecast = forecastData;
  }

  return forecast;
};

export default useGetForecast;