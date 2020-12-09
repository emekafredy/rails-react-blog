import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const registerUserAPI = (signUpData) => {
  return axios.post(`${baseUrl}/users`, signUpData);
}

export const loginUserAPI = (loginData) => {
  return axios.get(`${baseUrl}/auth/login`, loginData);
}
