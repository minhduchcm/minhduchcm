import React from "react";
import { render } from "react-dom";
import App from "./components/app";
import { configureStore, history } from "./configureStore";
import registerServiceWorker from "./registerServiceWorker";
import "./index.scss";

const store = configureStore();

render(
  <App store={store} history={history} />,
  document.getElementById("root")
);

registerServiceWorker();
