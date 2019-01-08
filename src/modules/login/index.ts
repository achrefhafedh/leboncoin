import { Reducer } from 'redux';
import { registerModuleReducer } from 'redux-register-module';

import { loginReducer } from './redux/reducer';

export { Auth } from './containers';

export const registerLogin = () => {
  registerModuleReducer('login', loginReducer as Reducer<any>);
};

export * from './redux/reducer';
