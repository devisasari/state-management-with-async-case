import { createSelector } from "@reduxjs/toolkit";

const posts = (state) => state.posts;

export const getPosts = createSelector(
  [posts],
  (posts) => posts.posts
);

export const getLoading = createSelector(
  [posts],
  (posts) => posts.loading
);

export const getError = createSelector(
  [posts],
  (posts) => posts.error
);