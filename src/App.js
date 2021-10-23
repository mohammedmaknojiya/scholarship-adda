import React from "react";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Layout />
      </div>
    </Provider>
  );
};

export default App;
