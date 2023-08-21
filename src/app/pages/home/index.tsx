import {
  Block,
  Icon,
  Link,
  Page, PageContent, Sheet, Toolbar
} from 'framework7-react';

import DailyForecastList from '../../components/DailyForecastList';
import ForecastDetail from '../../components/ForecastDetail';
import { getSafeAreaClass } from '../../utils/f7utils';
import './style.scss';
import useHomePageLogic from './useHomePageLogic';
import WeatherCard from '../../components/WeatherCard';
import moment from 'moment';

type HomePageProps = {
  f7route: any;
  f7router: any;
};

const HomePage = (props: HomePageProps) => {
  const { f7router } = props;

  const {
    weather,
    forecast,
    sheetOpen,
    handleSheetClosed,
    handleSearchClick,
    handleForecastClick,
    selectedForecast,
  } = useHomePageLogic(f7router);

  return (
    <Page name="home">
      <PageContent className={getSafeAreaClass()}>
        {weather && <WeatherCard model={weather} onSearchClick={handleSearchClick} />}
        {forecast && <DailyForecastList forecastList={forecast} onItemClick={handleForecastClick} />}
      </PageContent>
      <Sheet
        className="weather-sheet"
        style={{ height: 'auto' }}
        swipeToClose
        push
        backdrop
        opened={sheetOpen}
        onSheetClosed={handleSheetClosed}
      >
        <div className="swipe-handler"></div>
        <Toolbar className="sheet-toolbar">
          <Block inset>
            <p className="txt-sheet-header">
              {moment(selectedForecast?.date).format('ddd, D MMM YYYY')}
            </p>
          </Block>
          <Block className="right">
            <Link sheetClose><Icon f7="xmark_circle_fill" /></Link>
          </Block>
        </Toolbar>
        <PageContent>
          {selectedForecast && <ForecastDetail forecast={selectedForecast} />}
        </PageContent>
      </Sheet>
    </Page>
  );
};
export default HomePage;