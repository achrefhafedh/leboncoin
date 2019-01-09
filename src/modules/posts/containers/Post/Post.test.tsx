import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Post } from './Post';

configure({ adapter: new Adapter() });

describe('render without crashing', () => {
  beforeEach(() => {});

  it('render without crashing', () => {
    const auth = shallow(<Post />);
    expect(auth).toMatchSnapshot();
  });
});
