import React from 'react';
import { Link } from 'react-router-dom';

export const AuthLinks = () => {
  return (
    <div className="nav__right">
      <Link to='/register' className="nav__right-link nav__right-link__primary"> Sign up </Link>
      <Link to='/login' className="nav__right-link nav__right-link__light"> Log in </Link>
    </div>
  )
}
