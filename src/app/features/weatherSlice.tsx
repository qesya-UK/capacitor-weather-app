import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IWeatherApi from '../api/IWeatherAPI';
import WeatherAPI from '../api';
import config from '../config';
import { AppThunk } from '../store';
import { IForecastError } from '../api/types/IGetCurrentForecast';
import WeatherModel from '../domain/WeatherModel';
import ForecastModel from '../domain/ForecastModel';

export enum LOADING {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

const sliceName = 'weathers';

export interface IWeatherState {
  loading: LOADING;
  version: string;
  location: string;
  currentWeatherData: WeatherModel | null;
  currentWeatherError: IForecastError | null;
  forecastData: ForecastModel | null;
  forecaseError: IForecastError | null;
  isUsingCustomLocation: boolean;
}

const initialState: IWeatherState = {
  loading: LOADING.IDLE,
  version: '0',
  location: 'London',
  currentWeatherData: null,
  currentWeatherError: null,
  forecastData: null,
  forecaseError: null,
  isUsingCustomLocation: false,
};

const weatherApi: IWeatherApi = new WeatherAPI(config.weatherApiKeyV2);

const weatherSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<LOADING>) => {
      state.loading = payload;
    },
    setVersion: (state, { payload }: PayloadAction<string>) => {
      state.version = payload;
    },
    setLocation: (state, { payload }: PayloadAction<string>) => {
      state.location = payload;
    },
    setWeather: (state, { payload }: PayloadAction<WeatherModel>) => {
      state.currentWeatherData = payload;
    },
    setForecast: (state, { payload }: PayloadAction<ForecastModel>) => {
      state.forecastData = payload;
    },
    setIsUsingCustomLocation: (state, { payload }: PayloadAction<boolean>) => {
      state.isUsingCustomLocation = payload;
    },
  },
});

export const { setLoading, setVersion, setLocation, setWeather, setForecast, setIsUsingCustomLocation } = weatherSlice.actions;

export default weatherSlice.reducer;

// SELECTOR
export const weatherSelector = (state: { weatherStore: IWeatherState }) => state.weatherStore;

// ACTION
export const setAppVersion = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(LOADING.PENDING));
    try {
      dispatch(setVersion('1.0'));
      dispatch(setLoading(LOADING.SUCCEEDED));
    } catch (error) {
      dispatch(setLoading(LOADING.FAILED));
    }
  };
};

export const getCurrentWeather = (location: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(LOADING.PENDING));
    try {
      const response = await weatherApi.getCurrentWeather(location);
      const weather = new WeatherModel(response);
      dispatch(setWeather(weather));
      // TO DO : store into DB
      dispatch(setLoading(LOADING.SUCCEEDED));
    } catch (error) {
      dispatch(setLoading(LOADING.FAILED));
    }
  };
};

export const getForecast = (location: string, days: number): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(LOADING.PENDING));
    try {
      const response = await weatherApi.getForecast(location, days);
      const forecast = new ForecastModel(response);
      dispatch(setForecast(forecast));
      // TO DO : store into DB
      dispatch(setLoading(LOADING.SUCCEEDED));
    } catch (error) {
      dispatch(setLoading(LOADING.FAILED));
    }
  };
};

