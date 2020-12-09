import React, { useReducer, createContext } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import AuthReducer from './AuthReducer';
import {
  setUser, setErrors, startRequest, completeRequest
} from './AuthActions';

import { registerUserAPI, loginUserAPI } from '../../api/authAPI';
import { setToken } from '../../utils';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const initialState = {
    errors: [],
    loading: false,
    profile: {}
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (userData) => {
    try {
      dispatch(startRequest());
      const response = await registerUserAPI(userData);
      const { data } = response;

      await localStorage.setItem('jwtToken', data.token);
      setToken(data.token);

      const decoded = await jwt_decode(data.token);
      
      dispatch(completeRequest());
      dispatch(setUser(decoded));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const loginUser = async (loginData) => {
    try {
      dispatch(startRequest());
      const response = await loginUserAPI(loginData);
      const { data } = response;

      await localStorage.setItem('jwtToken', data.token);
      setToken(data.token);

      const decoded = await jwt_decode(data.token);

      dispatch(completeRequest());
      dispatch(setUser(decoded));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const getUser = async () => {
    try {
      dispatch(startRequest());
      const response = await getUserAPI();
      const { data } = response;

      dispatch(completeRequest());
      dispatch(setUserProfile(data));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const logoutUser = () => {
    try {
      dispatch(startRequest());
      localStorage.removeItem("jwtToken");
      dispatch(completeRequest());
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const setUserStatus = () => {
    let user;
    const token = window.localStorage.getItem("jwtToken");
    if (!token) return user = {};

    user = jwt_decode(token);
    if (!!token) {
      const currentTime = Date.now() / 1000;
      if (user.exp < currentTime) {
        delete axios.defaults.headers['authorization'];
        localStorage.removeItem("jwtToken");
        return user = {};
      }

      axios.defaults.headers['authorization'] = token
      return user;
    }
  };

  const user = setUserStatus();

  return (
    <AuthContext.Provider
      value={{
        registerUser: registerUser,
        loginUser: loginUser,
        getUser: getUser,
        logoutUser: logoutUser,
        errors: state.errors.errors,
        loading: state.loading,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
