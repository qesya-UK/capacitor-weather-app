
import { useEffect, useState } from 'react';
import { TypeGeolocation } from '../types';
import AppGeolocation from '../device/geolocation/AppGeolocation';

const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<TypeGeolocation | undefined>(undefined);
  const [geolocationReady, setGeolocationReady] = useState<boolean>(false);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const location = await (new AppGeolocation()).getCurrentLocationAsync();
        setCurrentLocation(location);
        setGeolocationReady(true);
      } catch (ex) { }
    };

    getLocation();

  }, []);

  return {
    currentLocation,
    geolocationReady
  };
};

export default useGeolocation;