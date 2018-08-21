import React from 'react';
import { hot } from 'react-hot-loader';
import Home from './component/Home';
import About from './component/About';

import './styles/App.scss';

const App = () => (
  <React.Fragment>
    <Home />
    <About />
  </React.Fragment>
);

export default hot(module)(App);
