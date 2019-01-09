import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { headerLayoutHOC } from './headerLayoutHOC';

configure({ adapter: new Adapter() });

describe('render without crashing', () => {
  let header;
  let pageContent;
  let HeaderLayout: any;

  beforeEach(() => {
    header = <div>Header</div>;
    pageContent = <div>PageContent</div>;
    HeaderLayout = headerLayoutHOC(header, pageContent);
  });

  it('render without crashing', () => {
    const headerHOC = shallow(<HeaderLayout />);
    expect(headerHOC).toMatchSnapshot();
  });
});
