import React, { Component } from "react";
import ReactDOM from "react-dom";

import Main from "./components/main";
import Header from "./components/header";
import { Parallax } from "react-scroll-parallax";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return <Header />;
  }
}

export default App;
