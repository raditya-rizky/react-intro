import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hello from "./components/Hello";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello />
    <App />
  </React.StrictMode>
);
