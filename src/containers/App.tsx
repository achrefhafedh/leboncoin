import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { PageLayout } from 'modules/page-layout';

import { configureStore } from '../store/configure-store';
import './App.scss';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PageLayout />
        </Provider>
      </>
    );
  }
}

export default App;
