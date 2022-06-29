import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import shortid from "shortid";
import managerUrl from "./helper/managerUrl";
const pathName = window.location.pathname.slice(1);

{
  shortid.isValid(pathName.slice(0, pathName.length - 1)) &&
  /[0-9]/.test(pathName)
    ? managerUrl(pathName)
    : ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById("root"),
      );
}
