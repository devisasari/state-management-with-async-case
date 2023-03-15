 import { configureStore } from "@reduxjs/toolkit";
  import postsReducer from "./reducers/postsReducer";

  const store = configureStore({
    reducer: {
      posts: postsReducer
    }
  });

  export default store;