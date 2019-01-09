import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getModuleState } from 'redux-register-module';

import { Store } from 'store';
import { addPost } from '../../redux/actions';

import { postsHeaderLayoutHOC } from '../../hoc/postsHeaderLayout';
import { PostType } from '../../types';

import './Post.scss';

type OwnProps = {};

type StateProps = {
  userType: string;
};

type DispatchProps = {
  post: (post: PostType) => void;
};

type PostProps = StateProps & DispatchProps & OwnProps;

type PostState = {
  checkboxDisabled: boolean;
  message: string;
  publicStatus: boolean;
  validPost: boolean;
};

export class PostContainer extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      checkboxDisabled: false,
      message: '',
      publicStatus: true,
      validPost: false,
    };
  }

  componentDidMount() {
    const { userType } = this.props;
    if (userType && userType === 'guest') {
      this.setState(() => ({
        checkboxDisabled: true,
      }));
    }
  }

  postHandler = () => {
    const { message, publicStatus } = this.state;
    const { post } = this.props;
    const params = {
      content: message,
      type: publicStatus ? 'public' : 'private',
    };
    post(params);
    this.setState(() => ({
      message: '',
      validPost: true,
    }));
  };

  messageHandler = (event: FormEvent<HTMLTextAreaElement>) => {
    const message = event.currentTarget.value;
    this.setState(() => ({
      message,
    }));
  };

  statusHandler = () => {
    const { publicStatus } = this.state;
    this.setState(() => ({
      publicStatus: !publicStatus,
    }));
  };

  renderContent = () => (
    <div className="post">
      <h2> Add Your Post :</h2>
      <textarea
        value={this.state.message}
        onChange={event => this.messageHandler(event)}
      />
      {/* TODO: for Button Label and Bheckbox we need an external module contain all component HTML */}
      <div className="action">
        <button onClick={this.postHandler} className="btn">
          Post
        </button>
        {!this.state.checkboxDisabled && (
          <div className="containerCheckbox">
            <input
              onChange={this.statusHandler}
              type="checkbox"
              id="private"
              name="private"
              value="private"
            />
            <label htmlFor="private">Private</label>
          </div>
        )}
      </div>
      {this.state.validPost && <div className="success">Success Post</div>}
    </div>
  );
  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state: Store, onProps: OwnProps): StateProps => {
  return {
    userType: getModuleState('login', state).user.type,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<Store, any, any>
): DispatchProps => ({
  post: (post: PostType) => {
    dispatch(addPost(post));
  },
});

const PostConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);

export const Post = postsHeaderLayoutHOC(<PostConnected />);
