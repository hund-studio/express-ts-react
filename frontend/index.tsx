import ReactDOM from "react-dom";
import { App } from "./app";

import "./global.scss";

const container = document.querySelector("#root");

ReactDOM.hydrate(<App />, container);
