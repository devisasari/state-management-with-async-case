import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Posts from "./components/Posts";

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
