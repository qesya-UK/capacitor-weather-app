import { Block, BlockTitle, Button, Card, CardContent, CardHeader, Icon, Link, f7 } from "framework7-react";
import WeatherModel from "../../domain/WeatherModel";

import './style.scss';
import { getBackgroundAirQuality } from "../../utils/airQualityTranslator";

type WeatherBoxProps = {
  model: WeatherModel;
  onSearchClick: () => void;
};

const WeatherCard = ({ model, onSearchClick }: WeatherBoxProps) => {
  return (
    <div className="weather-card">
      <div className="column-center">
        <h1 className="txt-header">{model.getLocation().name}</h1>
        <p className="txt-desc">{model.getLocation().tz_id + ', ' + model.getLocation().country}</p>
      </div>
      <Block strong inset className={`weather-box ${getBackgroundAirQuality(model.getAirQuality()["us-epa-index"])}`}>
        <div className='weather-box-temp-wrapper'>
          <span>{model?.getWeatherTemp().celcius} °C</span>
        </div>
        <div className="icon-wrapper">
          <img src={model?.getIcon()} className="icn" />
          <span>{model?.getRawWeatherData().current.condition.text}</span>
        </div>
        <div className="weather-box-info">
          <span>Q: {model.getAirQuality().epaDesc}</span>
          <span>H: {model?.getRawWeatherData().current.humidity}%</span>
          <span><Icon f7="wind" size="22px"></Icon>: {model?.getWeatherWind().wind_mph} m/s</span>
        </div>
      </Block>
      <Button className="btn-search" onClick={() => onSearchClick()}>Change Location</Button>
    </div>
  );
};

export default WeatherCard;