import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileLinks = ({ username, logoutUser }) => {
  return (
    <div className="nav__right">
      <span className="opt-dropdown">
        <button className="nav__right-link nav__right-link__primary opt-dropdown__button">
          <i className="fa fa-bars"></i>
        </button>

        <div className="opt-dropdown__content">
          <Link to='/post/new'> Create post </Link>
          <Link to='/'> My posts </Link>
          <Link to='/'> View drafts </Link>
          <Link
            to="/"
            onClick={() => logoutUser()}
          > 
            Logout
          </Link>
        </div>
      </span>

      <Link
        to="/"
        className="nav__right-link nav__right-link__light"
      > 
        @{ username }
      </Link>
    </div>
  )
}
