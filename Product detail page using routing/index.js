import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CartContextProvider from "./Store/CartContextProvider";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
