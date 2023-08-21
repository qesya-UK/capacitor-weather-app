import { Page } from 'framework7-react';
import useLoadWeatherList from '../../hooks/useLoadWeatherList';

import './style.scss';
import useSplashLogic from './useSplashLogic';

type SplashProps = {
  f7route: any;
  f7router: any;
};

const SplashScreen = (props: SplashProps) => {
  const { f7route, f7router } = props;

  useLoadWeatherList();

  useSplashLogic(f7router);

  return (
    <Page name="splash">
      <div className='splash-container'>
        <h1>Weather App</h1>
      </div>
    </Page>
  );
};

export default SplashScreen;