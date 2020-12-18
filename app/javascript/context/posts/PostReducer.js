import {
  SET_POSTS, SET_POST, SET_ERRORS, START_REQUEST, COMPLETE_REQUEST, SET_CATEGORIES, SET_NEW_POST
} from './PostActions';

export default (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case SET_NEW_POST:
      return {
        ...state,
        newPost: action.payload,
        loading: false
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case START_REQUEST:
      return {
          ...state,
        loading: true
      };
    case COMPLETE_REQUEST:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
