import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing";
import About from "./about";
import Photography from "./photography";
import Video from "./video";
import Contact from "./contact";

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
