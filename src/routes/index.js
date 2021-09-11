import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';
import Rising from '../pages/Rising';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/news" component={News} />
    <Route exact path="/rising" component={Rising} />
  </Switch>
);

export default Routes;
