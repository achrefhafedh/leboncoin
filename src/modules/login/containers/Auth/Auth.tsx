import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';
import { assoc } from 'ramda';

import { Store } from 'store';
import { asyncLocalStorage } from 'modules/page-layout/helpers';

import { userLogged } from '../../redux/actions';
import { User, UserStore } from '../../types';

import './Auth.scss';

type OwnProps = {} & RouteComponentProps;

type StateProps = {};

type DispatchProps = {
  login: (user: UserStore) => void;
};

type AuthProps = StateProps & DispatchProps & OwnProps;

export type AuthState = {
  user: User;
  error: boolean;
};

export class AuthContainer extends Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
      error: false,
    };
  }

  componentDidMount() {
    asyncLocalStorage.getItem('user').then(response => {
      if (response) {
        const user = JSON.parse(response);
        user.username !== 'Anonyme'
          ? this.loginHandler(user)
          : this.guestLoggedHandler();
      }
    });
  }

  loginHandler = (user: User) => {
    const { login, history } = this.props;
    const { username, password } = user;
    if (username !== '' && password !== '') {
      const params: UserStore = {
        username,
        type: 'logged',
      };
      login(params);
      history.push('/posts');
    } else this.setState(() => ({ error: true }));
  };

  changeValueHandler = (event: FormEvent<HTMLInputElement>, key: string) => {
    const { user } = this.state;
    const value = event.currentTarget.value;
    this.setState(() => ({
      user: assoc(key, value, user),
    }));
  };

  guestLoggedHandler = () => {
    const { login, history } = this.props;
    const params: UserStore = {
      username: 'Anonyme',
      type: 'guest',
    };
    login(params);
    history.push('/posts');
  };

  renderContent = () => (
    <div className="log-form">
      <h2>Login to your account</h2>
      <div className="form">
        <input
          onChange={event => this.changeValueHandler(event, 'username')}
          type="text"
          title="username"
          placeholder="username"
        />
        <input
          onChange={event => this.changeValueHandler(event, 'password')}
          type="password"
          title="username"
          placeholder="password"
        />
        <button
          onClick={() => this.loginHandler(this.state.user)}
          className="btn"
        >
          Login
        </button>
        <div onClick={this.guestLoggedHandler} className="guest">
          Guest
        </div>
      </div>
      {this.state.error && (
        <div className="error">login or password incorrect</div>
      )}
    </div>
  );
  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state: Store, onProps: OwnProps): StateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<Store, any, any>
): DispatchProps => ({
  login: (user: UserStore) => {
    dispatch(userLogged(user));
  },
});

export const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
