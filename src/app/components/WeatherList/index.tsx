import { Button } from "framework7-react";
import WeatherModel from "../../domain/WeatherModel";
import './style.scss';

type WeatherListProps = {
  weather: WeatherModel | null;
  onClick: (location: string) => void;
};

const WeatherList = (props: WeatherListProps) => {

  const { weather, onClick } = props;
  return (
    <div>
      {weather &&
        <Button className="location-weather-button" onClick={() => onClick(weather.getLocation().name)} key={weather.getLocation().name}>
          <div className="location-weather-item">
            <span>{weather.getLocation().name}</span><span>{weather.getWeatherTemp().celcius}</span> <img src={weather.getIcon()} />
          </div>
        </Button>
      }
    </div>
  );
};

export default WeatherList;