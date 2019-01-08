export * from './reducer';

import { ThunkDispatch } from 'redux-thunk';
import { Store } from 'store';
import { asyncLocalStorage } from 'modules/page-layout/helpers';
import { UserStore } from '../types';

export const userLogged = (user: UserStore) => (
  dispatch: ThunkDispatch<Store, any, any>
) => {
  // Simulate API Call with asynch localStorage
  asyncLocalStorage
    .setItem('user', JSON.stringify(user))
    .then(() => dispatch(userLoggedSuccess(user)))
    .catch(() => dispatch(userLoggedFail()));
};

// Success Action
export const USER_LOGGED_SUCCESS: 'USER_LOGGED_SUCCESS' = 'USER_LOGGED_SUCCESS';
export const userLoggedSuccess = (user: UserStore) => ({
  type: USER_LOGGED_SUCCESS,
  payload: user,
});

// Fail Action
export const USER_LOGGED_FAIL: 'USER_LOGGED_FAIL' = 'USER_LOGGED_FAIL';
export const userLoggedFail = () => ({
  type: USER_LOGGED_FAIL,
});
