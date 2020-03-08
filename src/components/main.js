import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "@chakra-ui/core";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={About} />
    <Route path="/photography" component={Photography} />
    <Route path="/video" component={Video} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
