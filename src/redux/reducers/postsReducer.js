import { createReducer } from "@reduxjs/toolkit";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR
} from "../actions/postsActions";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null
};

const postsReducer = createReducer(INITIAL_STATE, {
  [FETCH_POSTS_REQUEST]: (state) => {
    state.loading = true;
  },
  [FETCH_POSTS_SUCCESS]: (state, action) => {
    state.posts = action.payload;
    state.loading = false;
  },
  [FETCH_POSTS_ERROR]: (state, action) => {
    state.error = action.payload;
    state.loading = false;
  }
});

export default postsReducer;
