import React, { useReducer, createContext } from 'react';

import PostReducer from './PostReducer';
import {
  setPosts, setPost, setErrors, startRequest, completeRequest
} from './PostActions';

import {
  getPostsAPI, getPostAPI
} from '../../api/postsAPI';

export const PostContext = createContext();

export const PostsProvider = props => {
  const initialState = {
    errors: [],
    loading: false,
    posts: [],
    post: {}
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const getPosts = async () => {
    try {
      dispatch(startRequest());
      const response = await getPostsAPI();
      const { data } = response;
      
      dispatch(completeRequest());
      dispatch(setPosts(data));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const getPost = async () => {
    try {
      dispatch(startRequest());
      const response = await getPostAPI();
      const { data } = response;

      dispatch(completeRequest());
      dispatch(setPost(data));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  return (
    <PostContext.Provider
      value={{
        getPosts: getPosts,
        getPost: getPost,
        posts: state.posts.posts,
        post: state.post,
        loading: state.loading,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
