import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {HashRouter as Router} from "react-router-dom"; // HashRouter must be used instead of BrowserRouter for ipfs deployments because "/my-route" isn't a valid ipfs object, eg. with BrowserRouter ipfs returns an error like "ipfs resolve -r /ipfs/$hash/my-route: no link named "my-route" under $hash"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// TODO enable serviceWorker
serviceWorker.unregister();
