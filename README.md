# Weather App

## Tech Stack
- React
- Typescript
- Ionic Capacitor + Framework7
- Redux Toolkit
- Clean Architecture

## API
- https://www.weatherapi.com/
- Please sign up on the website to obtain the API key.

## Implemented Screen
- City Input
- Current Weather
- Weather Forecast

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```
## Environment Variables

Rename `.env.example` to `.env` , and set the API key for the WeatherApi API.

## Capacitor
Follow these steps to run the project:

- Run `npm install` to install the necessary dependencies.
- Create a `.env` file and copy the values from `.env.example`.
- Execute `npm run dev` to run the project on the web.
- Run `npm run build` to build the project.

## Running on iOS

To run the project on iOS, follow these steps:

- If the `ios` folder is not present, add it using `npx cap add ios`.
- Include the following lines in your `Info.plist`:
  ```xml
  <key>NSLocationAlwaysUsageDescription</key>
  <string>We need access to your location to provide location-based services.</string>
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>We need access to your location to provide location-based services.</string>
  ```
- Build the project with `npm run build`.
- Synchronize the project using `npx cap sync`.
- Build the iOS project for Capacitor with `npm run build-capacitor-ios`.
- Run the app on iOS using `npx cap run ios`.

## Running on Android

To run the project on Android, follow these steps:

- If the `android` folder is not present, add it using `npx cap add android`.
- Include the following lines in your `AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
<uses-permission android:name="android.permission.INTERNET" />
```
- Build the project with `npm run build`.
- Synchronize the project using `npx cap sync`.
- Build the iOS project for Capacitor with `npm run build-capacitor-android`.
- Run the app on iOS using `npx cap run android`.


made with 🎵 by Pasquale Palena