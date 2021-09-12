import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import New from '../pages/New';
import Rising from '../pages/Rising';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path="/rising" component={Rising} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
