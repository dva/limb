import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import debug from 'debug';

import App from './App';

debug.log(_.defaults({ foo: 1 }, { foo: 3, bar: 2 }));

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
