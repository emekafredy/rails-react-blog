import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// context
import { AuthContext } from '../../../context/auth';

// components
import { ErrorsList } from '../../../components/ErrorsList';

import '../auth.scss';

export const Register = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const  { user, registerUser, errors, loading } = authContext;

  if (user.user_id) history.push('/');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    registerUser({ first_name, last_name, username, password });
  }

  return (
    <div className="auth__container">
      <div className="auth__header">
        <h1> Register </h1>
        <small> All fields are required </small>
        <hr />
      </div>

      { errors?.length > 0 ? <ErrorsList errors={errors}/> : '' }

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="columns is-multiline is-mobile">
          <div className="column is-full">
            <div className="field">
              <label className="label">first name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="First Name"
                  // required
                  value={ first_name }
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="column is-full">
            <div className="field">
              <label className="label">last name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  // required
                  value={ last_name }
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="column is-full">
            <div className="field">
              <label className="label">username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="username"
                  // required
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
                  // required
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
          Already registered? please <Link to="/login"> Log in </Link>
        </div>
      </form>
    </div>
  )
}
