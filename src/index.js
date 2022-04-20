import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import validator from "validator";
import managerUrl from "./helper/managerUrl";
const pathName = window.location.pathname;

const root = ReactDOM.createRoot(document.getElementById("root"));
validator.isUUID(pathName.slice(1))
  ? managerUrl()
  : root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
