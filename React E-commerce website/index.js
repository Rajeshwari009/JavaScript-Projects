import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CartContextProvider from "./Store/CartContextProvider";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Store/AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
