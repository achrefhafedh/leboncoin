import { AppRoute } from 'modules/page-layout';
import { Posts } from './containers';

export const postsRoutes: AppRoute[] = [
  {
    path: '/posts',
    content: Posts,
    exact: true,
  },
];
