import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import App from './App';

console.log(_.defaults({ foo: 1 }, { foo: 3, bar: 2 }));

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
