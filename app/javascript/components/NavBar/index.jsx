import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

import { AuthLinks } from './AuthLinks';
import { ProfileLinks } from './ProfileLinks';

import { AuthContext } from '../../context/auth/index';

export const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="nav">
        <Link to='/' className="nav__brand"> RAILS REACT BLOG </Link>

        { user.user_id ? <ProfileLinks username={ user.username } logoutUser={ logoutUser }/> : <AuthLinks /> }
      </nav>
    </div>
  )
}
