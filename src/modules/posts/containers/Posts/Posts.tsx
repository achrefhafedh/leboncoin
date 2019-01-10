import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModuleState } from 'redux-register-module';

import { Store } from 'store';
import { PostType } from '../../types';
import { postsHeaderLayoutHOC } from '../../hoc/postsHeaderLayout';

type OwnProps = {};

type StateProps = {
  posts: PostType[];
  userType: string;
};

type DispatchProps = {};

type PostsProps = StateProps & DispatchProps & OwnProps;

type PostsState = {
  posts: PostType[];
  userType: string;
};
class PostsContainer extends Component<PostsProps, PostsState> {
  constructor(props: PostsProps) {
    super(props);
    this.state = {
      posts: [],
      userType: '',
    };
  }
  componentDidMount() {
    const { posts, userType } = this.props;
    if (posts && userType) {
      this.setState(() => ({
        posts,
        userType,
      }));
    }
  }
  renderContent = () => {
    const { posts, userType } = this.props;
    if (!posts || !userType) return null;
    return (
      <>
        {posts.length === 0 && <div className="empty">Empty Posts</div>}
        {posts.map((post, key) => (
          <div className="post" key={key}>
            {post.content}
          </div>
        ))}
      </>
    );
  };
  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state: Store, onProps: OwnProps): StateProps => {
  return {
    userType: getModuleState('login', state).user.type,
    posts: getModuleState('posts', state).posts,
  };
};

const PostsConnected = connect(
  mapStateToProps,
  {}
)(PostsContainer);

export const Posts = postsHeaderLayoutHOC(<PostsConnected />);
