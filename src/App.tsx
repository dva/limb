import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { DateTime } from 'luxon';
import _ from 'lodash';
import debug from 'debug';

import Route from './Route';

import './styles/App.scss';

const log = debug('root');

localStorage.debug = 'root';

setConfig({ logLevel: 'debug' });

const prod = process.env.NODE_ENV === 'production';

log(!prod
  ? `%c[DEVELOPMENT]%c v.${DateTime.utc().toLocal()}`
  : '%c[PRODUCTION]%c build.', 'background: #222; color: #bada55', 'color: inherit');

log('test', _.defaults({ foo: 1 }, { foo: 3, bar: 2 }));

const App = () => (
  <Route />
);

export default hot(module)(App);
