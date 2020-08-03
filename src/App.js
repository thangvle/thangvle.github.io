import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Main from "./components/main";
import Header from "./components/header";
import { Parallax } from "react-scroll-parallax";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  function handleMouseMove(event) {
    setMouse({
      x: event.pageX,
      y: event.pageY,
    });
  }
  return (
    <div>
      <Header />;
    </div>
  );
};

export default App;
