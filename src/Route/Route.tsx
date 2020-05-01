import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../component/Home';
import About from '../component/About';
import Hooks from '../component/Hooks';

import Header from '../common/Header';
import NotFound from '../common/NotFound';

const Routes = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/hooks' component={Hooks} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
