import React from 'react';
import './Auth.scss';

export const Auth = () => (
  <div className="log-form">
    <h2>Login to your account</h2>
    <div className="form">
      <input
        type="text"
        title="username"
        placeholder="username"
        value="admin"
      />
      <input
        type="password"
        title="username"
        placeholder="password"
        value="admin"
      />
      <button className="btn">Login</button>
      <a className="guest" href="#">
        Guest
      </a>
    </div>
  </div>
);
