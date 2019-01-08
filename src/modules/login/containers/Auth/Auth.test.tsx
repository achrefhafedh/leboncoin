import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AuthContainer } from './Auth';

configure({ adapter: new Adapter() });

describe('renders and execute function without crashing', () => {
  it('render without crashing', () => {
    const login = jest.fn();
    const auth = shallow(<AuthContainer login={login} />);
    expect(auth).toMatchSnapshot();
  });

  it('execute function loginHandler', () => {
    const login = jest.fn();
    const user = {
      username: 'Achraf',
      password: '$#1°678Ac/+.',
    };
    const wrapper = shallow<AuthContainer>(<AuthContainer login={login} />);
    wrapper.instance().loginHandler(user);
  });

  it('execute function guestLogged', () => {
    const login = jest.fn();
    const wrapper = shallow<AuthContainer>(<AuthContainer login={login} />);
    wrapper.instance().guestLoggedHandler();
  });

  it('execute function changeValue', () => {
    const login = jest.fn();
    const event = {
      currentTarget: {
        value: 'value',
      },
    } as React.ChangeEvent<HTMLInputElement>;
    const wrapper = shallow<AuthContainer>(<AuthContainer login={login} />);
    wrapper.instance().changeValueHandler(event, 'user');
  });
});
