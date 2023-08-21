import { useEffect } from "react";

import useLoadWeatherList from '../../hooks/useLoadWeatherList';
import useFetchWeather from '../../hooks/useFetchWeather';
import useGeolocation from '../../hooks/useGeolocation';
import useCurrentWeather from "../../hooks/useCurrentWeather";
import { LOADING } from "../../features/weatherSlice";
import useGetForecast from "../../hooks/useGetForecast";


const useSplashLogic = (f7router: any) => {
  useLoadWeatherList();
  const currentWeather = useCurrentWeather();
  const forecast = useGetForecast();
  const { loading, fetchWeather, fetchForecast } = useFetchWeather();
  const { currentLocation, geolocationReady } = useGeolocation();
  useEffect(() => {
    const searchScreen = '/search/';
    const weatherScreen = '/weather/';
    const navigateOptions = {
      reloadCurrent: true
    };

    if (!currentWeather && !forecast && geolocationReady && loading === LOADING.IDLE) {
      if (currentLocation) {
        fetchWeather((location as unknown) as string);
        fetchForecast((location as unknown) as string);
      } else {
        setTimeout(() => {
          f7router.navigate(searchScreen, navigateOptions);
        }, 2000);
      }
    } else if (currentWeather && forecast && loading === 'idle') {
      fetchWeather(currentWeather.getLocation().name);
      fetchForecast(currentWeather.getLocation().name);
    }

    if (loading === 'succeeded') {
      setTimeout(() => {
        f7router.navigate(weatherScreen, navigateOptions);
      }, 2000);
    } if (loading === 'failed') {
      setTimeout(() => {
        f7router.navigate(searchScreen, navigateOptions);
      }, 2000);
    }

  }, [currentWeather, loading, geolocationReady]);
};

export default useSplashLogic;