import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
