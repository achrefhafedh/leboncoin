import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModuleState } from 'redux-register-module';

import { Store } from 'store';
import { PostType } from '../../types';
import { postsHeaderLayoutHOC } from '../../hoc/postsHeaderLayout';
import './Posts.scss';

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
    let postsFiltred = posts;
    if (userType === 'guest') {
      postsFiltred = posts.filter(post => post.type === 'public');
    }
    return (
      <>
        {postsFiltred.length === 0 && <div className="empty">Empty Posts</div>}
        {postsFiltred.map((post, key) => (
          <div className="posts" key={key}>
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
