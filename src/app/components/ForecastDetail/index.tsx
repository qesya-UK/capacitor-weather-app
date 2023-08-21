import { Block, List, ListItem } from "framework7-react";
import IWeatherModel from "../../domain/IWeatherModel";

import './style.scss';
import { Forecastday } from "../../api/types/IGetCurrentForecast";
import { getBackgroundAirQuality, usEPAIndexTranslator } from "../../utils/airQualityTranslator";

type ForecastDetailProps = {
  forecast: Forecastday;
};

const ForecastDetail = ({ forecast }: ForecastDetailProps) => {
  return (
    <Block>
      <Block strong inset className={`description ${getBackgroundAirQuality(forecast.day.air_quality["us-epa-index"])}`}>
        <img src={`https://${forecast.day.condition.icon.replace(/^\/\//, "")}`} />
        <span>{forecast.day.condition.text}</span>
      </Block>

      <Block>
        <List dividers>
          <ListItem className='detail-item'>
            <span>Condition</span>
            <span className="txt-val">{usEPAIndexTranslator(forecast.day.air_quality["us-epa-index"])}</span>
          </ListItem>
          <ListItem className='detail-item'>
            <span>Humidity</span>
            <span className="txt-val">{forecast.day.avghumidity}%</span>
          </ListItem>
          <ListItem className='detail-item'>
            <span>Min Temp</span>
            <span className="txt-val">{forecast.day.maxtemp_c} °C</span>
          </ListItem>
          <ListItem className='detail-item'>
            <span>Max Temp</span>
            <span className="txt-val">{forecast.day.mintemp_c} °C</span>
          </ListItem>
          <ListItem className='detail-item'>
            <span>Wind</span>
            <span className="txt-val">{forecast.day.uv}{forecast.day.maxwind_mph}m/s</span>
          </ListItem>
          <ListItem className='detail-item'>
            <span>UV</span>
            <span className="txt-val">{forecast.day.uv}</span>
          </ListItem>
        </List>
      </Block>
    </Block>
  );
};

export default ForecastDetail;