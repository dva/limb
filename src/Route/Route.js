import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../component/Home';
import About from '../component/About';

export default () => (
  <Router>
    <React.Fragment>
      <Home />
      <About />
    </React.Fragment>
  </Router>
);
