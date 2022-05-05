import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// const pathName = window.location.pathname;
const root = ReactDOM.createRoot(document.getElementById("root"));

// validator is in index.js because it's faster than entering the App and redirecting
// validator.isUUID(pathName.slice(1))
//   ? managerUrl()
//   :
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
