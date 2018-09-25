import React, { Component } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default props => (
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>
)