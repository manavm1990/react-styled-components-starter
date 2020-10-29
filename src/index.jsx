import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Typography from "typography";
import funstonTheme from "typography-theme-funston";
import App from "./components";
import reportWebVitals from "./reportWebVitals";

const typography = new Typography(funstonTheme);
typography.injectStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
