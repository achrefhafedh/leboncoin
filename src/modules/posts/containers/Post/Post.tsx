import React, { Component } from 'react';
import { postsHeaderLayoutHOC } from '../../hoc/postsHeaderLayout';

type OwnProps = {};

type StateProps = {};

type DispatchProps = {};

type PostProps = StateProps & DispatchProps & OwnProps;

type PostState = {};
class PostContainer extends Component<PostProps, PostState> {
  render() {
    return <div>Post</div>;
  }
}

export const Post = postsHeaderLayoutHOC(<PostContainer />);
