import React from "react";
import AppRoutes from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
