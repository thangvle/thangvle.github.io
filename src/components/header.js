import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing";
import AboutMe from "./aboutme";
import Photography from "./photography";
import Video from "./video";
import Contact from "./contact";

const Header = () => {
  return (
    <div>
      <Route>
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/photography" component={Photography} />
          <Route path="/video" component={Video} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Route>
    </div>
  );
};
export default Header;
