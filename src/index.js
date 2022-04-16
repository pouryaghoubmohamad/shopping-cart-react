import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


// css
import "./styles/GlobalStyles.css";

// Route
import { BrowserRouter } from "react-router-dom";

// react-redux
import { Provider } from "react-redux";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
