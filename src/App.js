import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { DateTime } from 'luxon';
import _ from 'lodash';
import debug from 'debug';

import Route from './Route';

import './styles/App.scss';

setConfig({ logLevel: 'debug' });

debug.log(`%cinfo: ${DateTime.utc().toLocal()}`, 'background: #222; color: #bada55');
debug.log(_.defaults({ foo: 1 }, { foo: 3, bar: 2 }));

const App = () => (
  <Route />
);

export default hot(module)(App);
