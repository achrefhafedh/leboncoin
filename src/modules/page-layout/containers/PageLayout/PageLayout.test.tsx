import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PageLayout } from './PageLayout';

configure({ adapter: new Adapter() });

describe('renders without crashing', () => {
  it('render without crashing', () => {
    const pageLayout = shallow(<PageLayout />);
    expect(pageLayout).toMatchSnapshot();
  });
});
