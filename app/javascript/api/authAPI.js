import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const registerUserAPI = (signUpData) => {
  return axios.post(`${baseUrl}/auth/register`, signUpData);
}

export const loginUserAPI = (loginData) => {
  return axios.post(`${baseUrl}/auth/login`, loginData);
}
