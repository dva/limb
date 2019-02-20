import React from 'react';
import { hot } from 'react-hot-loader/root'; // tslint:disable-line:no-submodule-imports
import { DateTime } from 'luxon';
import _ from 'lodash';

import Route from './Route';
import log from './utils/log';

import './styles/App.scss';

localStorage.setItem('debug', 'app:*');

const prod = process.env.NODE_ENV === 'production';
const mode = !prod
  ? `%c[DEVELOPMENT]%c v.${DateTime.utc().toLocal()}`
  : '%c[PRODUCTION]%c build.';

log('root', mode, 'background: #222; color: #bada55', 'color: inherit');
log('test', _.defaults({ foo: 1 }, { foo: 3, bar: 2 }));

const App = () => <Route />;

export default hot(App);
