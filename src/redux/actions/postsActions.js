import axios from "axios";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsError = (error) => ({
  type: FETCH_POSTS_ERROR,
  payload: error
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const posts = response.data;
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsError(error));
    }
  };
};