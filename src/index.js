import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";
import { SoundLayer } from "./SoundLayer";
import soundReducer, { soundInitialState } from "./soundReducer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <App />
      </SoundLayer>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
