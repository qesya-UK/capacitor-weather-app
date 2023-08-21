import { AirQuality, IGetCurrentWeatherResponse } from "../api/types/IGetCurrentWeather";
import { gbDefraIndexTranslator, usEPAIndexTranslator } from "../utils/airQualityTranslator";
import IWeatherModel from "./IWeatherModel";
import { TypeLocation, TypeWeatherCondition, TypeWeatherTemp, TypeWeatherWind } from "./types";

export default class WeatherModel implements IWeatherModel {
  private readonly data: IGetCurrentWeatherResponse;

  constructor(weatherData: IGetCurrentWeatherResponse) {
    this.data = weatherData;
  }

  getRawWeatherData(): IGetCurrentWeatherResponse {
    return this.data;
  }

  getLocation(): TypeLocation {
    return this.data.location;
  }

  getWeatherCondition(): TypeWeatherCondition {
    return this.data.current.condition;
  }

  getWeatherTemp(): TypeWeatherTemp {
    return {
      celcius: this.data.current.temp_c,
      fahrenheit: this.data.current.temp_f,
      feelslike_c: this.data.current.feelslike_c,
      feelslike_f: this.data.current.feelslike_f,
    }
  }

  getWeatherWind(): TypeWeatherWind {
    return {
      wind_degree: this.data.current.wind_degree,
      wind_dir: this.data.current.wind_dir,
      wind_kph: this.data.current.wind_kph,
      wind_mph: this.data.current.wind_kph,
    }
  }

  getIcon(): string {
    return `https://${this.data.current.condition.icon.replace(/^\/\//, "")}`;
  }

  getAirQuality(): AirQuality & { epaDesc: string, defraDesc: { band: string, gm: string } } {
    /**
     * co = Carbon Monoxide (μg/m3)
     * o3 = Ozone (μg/m3)
     * no2 = Nitrogen dioxide (μg/m3)
     * so2 = Sulphur dioxide (μg/m3)
     * pm2_5 = PM2.5 (μg/m3)
     * pm10 = PM10 (μg/m3)
     * us-epa-index = 
     *  1 = GOOD
     *  2 = Moderate
     *  3 = Unhealthy for sensitive group
     *  4 = Unhealthy
     *  5 = Very Unhealthy
     *  6 = Hazardous
     * gb-defra-index = UK Defra Index (See table below)
     */
    return {
      ...this.data.current.air_quality,
      epaDesc: usEPAIndexTranslator(this.data.current.air_quality["gb-defra-index"]),
      defraDesc: gbDefraIndexTranslator(this.data.current.air_quality["gb-defra-index"]),
    };
  }
}