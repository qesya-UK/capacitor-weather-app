import { Block, BlockTitle, Button, Card, List, ListItem } from "framework7-react";

import './style.scss';
import ForecastModel from "../../domain/ForecastModel";
import moment from "moment";
import { Forecastday } from "../../api/types/IGetCurrentForecast";

type DailyForecastListProps = {
  forecastList: ForecastModel;
  onItemClick: (data: Forecastday) => void;
};

const DailyForecastList = ({ forecastList, onItemClick }: DailyForecastListProps) => {
  const { forecastday } = forecastList.getForecast()

  return (
    <List className="forecast-list">
      <Block>
        <BlockTitle large className="txt-header">5-Days Forecast</BlockTitle>
      </Block>
      {
        forecastday.map((data, index) => {
          return (
            <Block inset className="forecast-item" key={`${data.date_epoch}_${index}`}>
              <Button className="forecast-item-wrapper" onClick={() => onItemClick(data)}>
                <span>{moment(data.date).format('LL')}</span>
                <div className="forecast-item-temp-wrapper">
                  <span>{data.day.avgtemp_c} °C</span>
                  <img className="forecast-temp-icon" src={`https://${data.day.condition.icon.replace(/^\/\//, "")}`} />
                </div>
              </Button>
            </Block>
          );
        })
      }
    </List>
  );
};

export default DailyForecastList;