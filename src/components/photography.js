import React, { Component, Fragment, useState } from "react";
import { useTransition, animated } from "react-spring";
import Shadow from "./assets/shadowriver.JPG";
import PhotoContainer from "./photoComponents/photoContainer";

const Photography = () => {
  const [images, setImage] = useState([
    {
      id: 1,
      src:
        "F:Programming Projectweb\thangvle.github.iosrccomponentsassetsshadowriver.JPG",
    },
    {
      id: 2,
      src:
        "F:Programming Projectweb\thangvle.github.iosrccomponentsassetssongNghien.png",
    },
  ]);

  return (
    <>
      <PhotoContainer />
    </>
  );
};

export default Photography;
