import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
