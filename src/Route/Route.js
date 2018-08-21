import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../component/Home';
import About from '../component/About';

import Header from '../common/Header';
import NotFound from '../common/NotFound';

export default () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>
);
