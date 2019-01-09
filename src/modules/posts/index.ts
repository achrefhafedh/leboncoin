import { Reducer } from 'redux';
import { registerModuleReducer } from 'redux-register-module';

import { postsReducer } from './redux/reducer';

export { Post, Posts } from './containers';

export const registerPosts = () => {
  registerModuleReducer('posts', postsReducer as Reducer<any>);
};

export * from './redux/reducer';

export * from './routes';
