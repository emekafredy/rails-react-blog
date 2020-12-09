import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

export const createPostAPI = (postData) => {
  return axios.post(`${baseUrl}/posts`, postData);
}

export const getPostsAPI = () => {
  return axios.get(`${baseUrl}/posts`);
}

export const getPostAPI = (id) => {
  return axios.get(`${baseUrl}/posts/${id}`);
}

export const updatePostAPI = (id, postData) => {
  return axios.put(`${baseUrl}/posts/${id}`, postData);
}

export const deletePostAPI = () => {
  return axios.delete(`${baseUrl}/posts/${id}`);
}
