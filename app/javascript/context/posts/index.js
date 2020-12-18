import React, { useReducer, createContext } from 'react';

import PostReducer from './PostReducer';
import {
  setPosts, setPost, setErrors, startRequest, completeRequest, setCategories, setNewPost
} from './PostActions';

import {
  getPostsAPI, getPostAPI, createPostAPI, getCategoriesAPI
} from '../../api/postsAPI';

export const PostContext = createContext();

export const PostsProvider = props => {
  const initialState = {
    errors: [],
    loading: false,
    posts: [],
    post: {},
    categories: [],
    newPost: {}
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

  const getPost = async (id) => {
    try {
      dispatch(startRequest());
      const response = await getPostAPI(id);
      const { data } = response;

      dispatch(completeRequest());
      dispatch(setPost(data));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const createPost = async (postData) => {
    try {
      dispatch(startRequest());
      const response = await createPostAPI(postData);
      const { data } = response;
      
      dispatch(completeRequest());
      dispatch(setNewPost(data));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const getCategories = async () => {
    try {
      dispatch(startRequest());
      const response = await getCategoriesAPI();
      const { data } = response;
      
      dispatch(completeRequest());
      dispatch(setCategories(data));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  };

  const clearNewPostId = () => {
    try {
      dispatch(setNewPost({}));
    } catch (err) {
      dispatch(setErrors(err.response.data));
    }
  }

  return (
    <PostContext.Provider
      value={{
        getPosts: getPosts,
        getPost: getPost,
        createPost: createPost,
        getCategories: getCategories,
        clearNewPostId: clearNewPostId,
        errors: state.errors.errors,
        posts: state.posts.posts,
        post: state.post.post,
        categories: state.categories.categories,
        loading: state.loading,
        newPost: state.newPost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
