import { assoc } from 'ramda';

import { UserStore } from '../types';
import { userLoggedSuccess, userLoggedFail } from './actions';

export type LoginStore = {
  user: UserStore;
  errorUser: boolean;
};

export type LoginAction =
  | ReturnType<typeof userLoggedSuccess>
  | ReturnType<typeof userLoggedFail>;

export const initialState: LoginStore = {
  user: {
    username: '',
    type: 'guest',
  },
  errorUser: false,
};

export const loginReducer = (
  state: LoginStore = initialState,
  action: LoginAction
): LoginStore => {
  switch (action.type) {
    case 'USER_LOGGED_SUCCESS': {
      return assoc('user', action.payload, state);
    }
    case 'USER_LOGGED_FAIL': {
      return assoc('errorUser', true, state); // TODO: show error toast
    }
    default:
      return state;
  }
};
