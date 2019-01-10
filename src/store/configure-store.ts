import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { registerLogin, LoginStore } from 'modules/login';
import { registerPosts, PostsStore } from 'modules/posts';

import { createRootReducer } from './reducers';

export interface Store {
  module: {
    login: LoginStore;
    posts: PostsStore;
  };
}

// Store configuration
export const configureStore = () => {
  // Register reducers
  registerLogin();
  registerPosts();

  const rootReducer = createRootReducer();
  const middlewares: Middleware[] = [thunk];
  if (process.env.NODE_ENV === 'development') {
    const reduxLoggerConf = require('./reduxLogger.config'); // eslint-disable-line global-require
    middlewares.push(createLogger(reduxLoggerConf));
  }

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};
