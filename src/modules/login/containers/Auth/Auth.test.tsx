import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AuthContainer } from './Auth';

configure({ adapter: new Adapter() });

describe('renders and execute function without crashing', () => {
  let login: () => void;
  let mock: any;

  beforeEach(() => {
    login = jest.fn();
    mock = jest.fn();
  });

  it('render without crashing', () => {
    const auth = shallow(
      <AuthContainer
        match={mock}
        location={mock}
        history={mock}
        login={login}
      />
    );
    expect(auth).toMatchSnapshot();
  });

  it('execute function loginHandler', () => {
    const historyMock: any = { push: jest.fn() };
    const user = {
      username: 'Achraf',
      password: '$#1°678Ac/+.',
    };
    const wrapper = shallow<AuthContainer>(
      <AuthContainer
        match={mock}
        location={mock}
        history={historyMock}
        login={login}
      />
    );
    wrapper.instance().loginHandler(user);
  });

  it('execute function guestLogged', () => {
    const historyMock: any = { push: jest.fn() };
    const wrapper = shallow<AuthContainer>(
      <AuthContainer
        match={mock}
        location={mock}
        history={historyMock}
        login={login}
      />
    );
    wrapper.instance().guestLoggedHandler();
  });

  it('execute function changeValue', () => {
    const event = {
      currentTarget: {
        value: 'value',
      },
    } as React.ChangeEvent<HTMLInputElement>;
    const wrapper = shallow<AuthContainer>(
      <AuthContainer
        match={mock}
        location={mock}
        history={mock}
        login={login}
      />
    );
    wrapper.instance().changeValueHandler(event, 'user');
  });
});
