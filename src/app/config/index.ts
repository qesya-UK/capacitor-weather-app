import { AppConfig } from "../types";

const config: AppConfig = Object.freeze({
    weatherApiKeyV2: import.meta.env.VITE_REACT_WEATHER_API_KEY,
});

export default config;