import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// context
import { AuthContext } from '../../../context/auth';

import '../auth.scss';

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const  { user, loginUser, errors, loading } = authContext;

  if (user.user_id) history.push('/');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    loginUser({ username, password })
  }

  return (
    <div className="auth__container">
      <div className="auth__header">
        <h1> Login </h1>
        <hr />
      </div>

      { errors ? <small style={{ color: 'red' }}> { errors } </small> : '' }

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="columns is-multiline is-mobile">
          <div className="column is-full">
            <div className="field">
              <label className="label">username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="username"
                  required
                  value={ username }
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="column is-full">
            <div className="field">
              <label className="label">password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  required
                  value={ password }
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="column is-full">
            <div className="field">
              <div className="control">
                <button
                  className="button is-link"
                  type="submit"
                  disabled={ loading }
                > 
                  { loading ? 'Processing' : 'Register' }
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="auth__redirect">
          Don't have an account? please <Link to="/register"> Register </Link>
        </div>
      </form>
    </div>
  )
}
