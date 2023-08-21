
export type AppConfig = {
    weatherApiKey: string;
    weatherApiKeyV2: string;
};

export type TypeGeolocation = {
    lon: number;
    lat: number;
};

export type TypeLocation = string | TypeGeolocation;