// Actions
export const SET_POSTS = "SET_POSTS";
export const SET_POST = "SET_POST";
export const SET_ERRORS = "SET_ERRORS";
export const START_REQUEST = "START_REQUEST";
export const COMPLETE_REQUEST = "COMPLETE_REQUEST";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_NEW_POST = "SET_NEW_POST"

// Action creators
export const setPosts = (posts) => {
  return { type: SET_POSTS, payload: { posts } };
}

export const setPost = (post) => {
  return { type: SET_POST, payload: { post } };
}

export const setErrors = (errors) => {
  return { type: SET_ERRORS, payload: errors };
}

export const startRequest = () => {
  return { type: START_REQUEST };
}

export const completeRequest = () => {
  return { type: COMPLETE_REQUEST };
}

export const setCategories = (categories) => {
  return { type: SET_CATEGORIES, payload: { categories } };
}

export const setNewPost = (data) => {
  return { type: SET_NEW_POST, payload: { data } };
}
