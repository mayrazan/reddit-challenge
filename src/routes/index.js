import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import New from '../pages/New';
import Rising from '../pages/Rising';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import { useAuth } from '../hooks/useAuth';

const Routes = () => {
  const { isSigned } = useAuth();

  return (
    <Router>
      {isSigned ? (
        <Switch>
          <Route exact path="/hot" component={Home} />
          <Route exact path="/new" component={New} />
          <Route exact path="/rising" component={Rising} />
          <Redirect to="/hot" />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      )}
    </Router>
  );
};
export default Routes;
