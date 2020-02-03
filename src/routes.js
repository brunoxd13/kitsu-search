import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Characters from "./pages/characters";
import Character from "./pages/character";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Characters} />
    <Route path="/page/:id(\d+)" component={Characters} />
    <Route path="/character/:id(\d+)" component={Character} />
    <Route component={() => <Redirect to={{ pathname: "/" }} />} />
  </Switch>
);

export default Routes;
