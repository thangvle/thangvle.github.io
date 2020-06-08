import React, { Component, useState, useEffect, useRef, Fragment } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { animated, useSpring } from "react-spring";
import Image from "./assets/songNghien.png";
import DSC from "./assets/DSC02117.JPG";

const Landing = () => {
  const calc = (o) => `translateY(${o * 0.1}px)`;
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const [{ springScrollY }, springsetScrollY] = useSpring(() => ({
    springScrollY: 0,
  }));
  const parallaxLevel = 10;
  springsetScrollY({ springScrollY: scrollY });
  const interpHeader = springScrollY.interpolate(
    (o) => `translateY(${o / parallaxLevel}px)`
  );
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });
  return (
    <Fragment>
      <animated.div style={fade}>
        <animated.div style={{ transform: interpHeader }}>
          <span>
            <img src={Image} />
          </span>
        </animated.div>
        <animated.div style={{ transform: interpHeader }}>
          <span>
            <img src={DSC} />
          </span>
        </animated.div>
      </animated.div>
    </Fragment>
  );
};

export default Landing;
