
import HomePage from './pages/home';


import NotFoundPage from './pages/404';
import SplashScreen from './pages/splash';
import SearchPage from './pages/search/index';

var routes = [
  {
    path: '/',
    component: SplashScreen,
  },
  {
    path: '/weather',
    component: HomePage,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
