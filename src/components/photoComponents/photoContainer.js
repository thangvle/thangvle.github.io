import React from "react";
import Photo from "./photo";
import { Grid } from "./gridContainer/grid";
import { useTransition, animated } from "react-spring";
import { GridTest } from "./gridContainer/gridTest";

const PhotoContainer = (props) => {
  return (
    <div style={{ marginTop: "100px" }}>
      {/*Grid */}
      <GridTest />
    </div>
  );
};

export default PhotoContainer;
