import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../store/configure-store';
import './App.scss';
import { PageLayout } from 'modules/page-layout';

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
