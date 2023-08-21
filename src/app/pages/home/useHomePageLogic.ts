import { useEffect, useState } from "react";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import useGetForecast from "../../hooks/useGetForecast";
import { Forecastday } from "../../api/types/IGetCurrentForecast";

const useHomePageLogic = (f7router: any) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const weather = useCurrentWeather();
  const forecast = useGetForecast();
  const [selectedForecast, setSelectedForecast] = useState<Forecastday>();

  useEffect(() => {
    if (!weather && !forecast) {
      f7router.navigate('/search/');
    }
  }, []);

  const handleForecastClick = (data: Forecastday) => {
    if (data) {
      setSelectedForecast(data);
      setSheetOpen(true);
    }
  };

  const handleSheetClosed = () => setSheetOpen(false);

  const handleSearchClick = () => f7router.navigate('/search/');

  return {
    sheetOpen,
    weather,
    forecast,
    selectedForecast,
    handleSheetClosed,
    handleSearchClick,
    handleForecastClick
  };
};

export default useHomePageLogic;