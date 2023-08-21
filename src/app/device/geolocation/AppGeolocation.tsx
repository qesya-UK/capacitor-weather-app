import { TypeGeolocation } from "../../types";
import IGeolocation from "./IGeolocation";
import { Geolocation } from "@capacitor/geolocation";

export default class AppGeolocation implements IGeolocation {
  constructor() { }
  async getCurrentLocationAsync(): Promise<TypeGeolocation | undefined> {
    let hasPermission = false;
    try {
      const status = await Geolocation.checkPermissions();
      if (status.location === 'granted' || status.coarseLocation === 'granted') {
        hasPermission = true;
      }
    } catch (ex) { }

    if (!hasPermission) {
      try {
        const status = await Geolocation.requestPermissions();

        if (status.location === 'granted' || status.coarseLocation === 'granted') {
          hasPermission = true;
        }
      } catch (ex) { }
    }

    let result: TypeGeolocation | undefined = undefined;

    try {
      const position = await Geolocation.getCurrentPosition();

      if (position) {
        result = {
          lon: position?.coords?.longitude,
          lat: position?.coords.latitude
        };
      }

    } catch (ex) { }


    return result;
  }

}