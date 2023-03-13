 import { configureStore } from "@reduxjs/toolkit";
  import postsReducer from "./reducer/postsReducer";

  const store = configureStore({
    reducer: {
      posts: postsReducer
    }
  });

  export default store;