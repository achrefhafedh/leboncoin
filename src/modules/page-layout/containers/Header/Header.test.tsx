import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Header } from './Header';

configure({ adapter: new Adapter() });

describe('renders and execute function without crashing', () => {
  it('render without crashing', () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
  });

  it('execute function logout', () => {
    const wrapper = shallow<Header>(<Header />);
    wrapper.instance().logout();
  });
});
