import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

import { Home } from '../views/Home';
import { Register } from '../views/Auth/Register';
import { Login } from '../views/Auth/Login';
import { PostDetails } from '../views/PostDetails';
import { NewPost } from '../views/NewPost';

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/posts/:id" component={ PostDetails } />
        <Route exact path="/post/new" component={ NewPost } />
      </Switch>
      <Footer />
    </Router>
  );
}
