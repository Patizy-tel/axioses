import SignInPage from '../pages/signIn.jsx';
import SignUpPage from '../pages/signUp.jsx';
import MainPage from '../pages/main.jsx';
import PayPage from '../pages/pay.jsx';
import HistoryPage from '../pages/history.jsx';
import AboutPage from '../pages/about.jsx';
import DepositPage from '../pages/deposit.jsx';

import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: SignInPage,
  },
  {
    path: '/signUp/',
    component: SignUpPage,
  },
  {
    path: '/main/',
    component: MainPage,
  },
  {
    path: '/pay/',
    component: PayPage,
  },
  {
    path: '/deposit/',
    component: DepositPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/history/',
    component: HistoryPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
