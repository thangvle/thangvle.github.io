import React from "react";
import Photo from "./photo";
import { Grid } from "./gridContainer/grid";
import { useTransition, animated } from "react-spring";

const PhotoContainer = (props) => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Grid />
    </div>
  );
};

export default PhotoContainer;
