import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';
import Rising from '../pages/Rising';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/news" component={News} />
    <Route exact path="/rising" component={Rising} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
