import { AppRoute } from 'modules/page-layout';
import { Auth } from './containers';

export const loginRoutes: AppRoute[] = [
  {
    path: '/login',
    content: Auth,
    exact: true,
  },
];
