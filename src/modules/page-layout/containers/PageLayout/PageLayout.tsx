import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import { loginRoutes } from 'modules/login';

const defaultRedirection = () => <Redirect to="/login" />;
const routes = [...loginRoutes];

export const PageLayout = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.content}
          />
        ))}
        <Route render={defaultRedirection} />
      </Switch>
    </BrowserRouter>
  );
};
