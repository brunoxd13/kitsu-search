import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { CharacterProvider } from "./context/character";
import App from "./app";

import Theme from "./theme/theme-provider";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <CharacterProvider>
      <Theme>
        <App />
      </Theme>
    </CharacterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
