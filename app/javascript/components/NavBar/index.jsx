import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

export const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to='/' className="nav__brand"> RAILS REACT BLOG </Link>

        <div className="nav__right">
          <Link to='/' className="nav__right-link nav__right-link__primary"> Sign up </Link>
          <Link to='/' className="nav__right-link nav__right-link__light"> Log in </Link>
        </div>
      </nav>
    </div>
  )
}
