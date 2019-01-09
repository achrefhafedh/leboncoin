import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PostContainer } from './Post';

configure({ adapter: new Adapter() });

describe('render without crashing', () => {
  let userType: string;
  let post: () => void;
  beforeEach(() => {
    userType = 'guest';
    post = jest.fn();
  });

  it('render without crashing', () => {
    const postItem = shallow(<PostContainer post={post} userType={userType} />);
    expect(postItem).toMatchSnapshot();
  });

  it('execute function postHandler', () => {
    const wrapper = shallow<PostContainer>(
      <PostContainer post={post} userType={userType} />
    );
    wrapper.instance().postHandler();
  });

  it('execute function messageHandler', () => {
    const event = {
      currentTarget: {
        value: 'value',
      },
    } as React.ChangeEvent<HTMLTextAreaElement>;
    const wrapper = shallow<PostContainer>(
      <PostContainer post={post} userType={userType} />
    );
    wrapper.instance().messageHandler(event);
  });

  it('execute function statusHandler', () => {
    const wrapper = shallow<PostContainer>(
      <PostContainer post={post} userType={userType} />
    );
    wrapper.instance().statusHandler();
  });
});
