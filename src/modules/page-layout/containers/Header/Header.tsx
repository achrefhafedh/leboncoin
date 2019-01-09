import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { asyncLocalStorage } from '../../helpers';

import './Header.scss';

type OwnProps = {};

type StateProps = {};

type DispatchProps = {};

type HeaderProps = StateProps & DispatchProps & OwnProps;

export type HeaderState = {
  redirect: boolean;
};

// a Class because it will be connected to store next time with other element
export class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };
  logout = () => {
    asyncLocalStorage.clear();
    this.setState({
      redirect: true,
    });
  };
  render() {
    return (
      <>
        {this.renderRedirect()}
        <ul className="header">
          <li>
            <NavLink exact to="/posts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/post">
              Add post
            </NavLink>
          </li>
          <li onClick={this.logout}>
            <div>Logout</div>
          </li>
        </ul>
      </>
    );
  }
}
