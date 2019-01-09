import { createStore, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { registerLogin, LoginStore } from 'modules/login';
import { registerPosts } from 'modules/posts';

import { createRootReducer } from './reducers';

export interface Store {
  module: {
    login: LoginStore;
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

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept(() => {
  //     const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
};
