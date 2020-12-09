import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileLinks = ({ username, logoutUser }) => {
  return (
    <div className="nav__right">
      <span className="nav__right-link nav__right-link__primary"> @{ username } </span>
      <Link
        to="/"
        onClick={() => logoutUser()}
        className="nav__right-link nav__right-link__light"
      > 
        Logout
      </Link>
    </div>
  )
}
