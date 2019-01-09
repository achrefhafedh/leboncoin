import React, { Component } from 'react';
import { postsHeaderLayoutHOC } from '../../hoc/postsHeaderLayout';

type OwnProps = {};

type StateProps = {};

type DispatchProps = {};

type PostsProps = StateProps & DispatchProps & OwnProps;

type PostsState = {};
class PostsContainer extends Component<PostsProps, PostsState> {
  render() {
    return <div>Posts</div>;
  }
}

export const Posts = postsHeaderLayoutHOC(<PostsContainer />);
