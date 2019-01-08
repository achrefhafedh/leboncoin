import { combineReducers } from 'redux';
import { getModuleReducerKey, getReducers } from 'redux-register-module';

/**
 * Root reducer, load all reducers
 */
export const createRootReducer = () =>
  combineReducers({
    [getModuleReducerKey()]: combineReducers(getReducers()),
  });
