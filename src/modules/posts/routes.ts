import { AppRoute } from 'modules/page-layout';
import { Posts, Post } from './containers';

export const postsRoutes: AppRoute[] = [
  {
    path: '/posts',
    content: Posts,
    exact: true,
  },
  {
    path: '/post',
    content: Post,
    exact: true,
  },
];
