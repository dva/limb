import React from 'react';
import { hot, setConfig } from 'react-hot-loader';

import Route from './Route';

import './styles/App.scss';

setConfig({ logLevel: 'debug' });

const App = () => (
  <Route />
);

export default hot(module)(App);
