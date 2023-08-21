import { TypeGeolocation } from "../../types";


export default interface IGeolocation {
    getCurrentLocationAsync(): Promise<TypeGeolocation | undefined>;
}