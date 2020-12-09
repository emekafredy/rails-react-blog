import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components/NavBar';

import { Home } from '../views/Home';
import { Register } from '../views/Auth/Register/index';
import { Login } from '../views/Auth/Login/index';

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
      </Switch>
    </Router>
  );
}
