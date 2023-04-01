import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import { Provider } from "react-redux";
import rootStore from "./config/store";

function App() {
  return (
    <div className="App">
      <Provider store={rootStore}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </Provider>
    </div>
  );
}

export default App;
