import React, { Component, useState, useEffect, useRef, Fragment } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import storage from "../firebase/index";
import Image from "./assets/songNghien.png";
import DSC from "./assets/DSC02117.JPG";

const TextContainer = styled.div`
  text-align: center;
  font-size: 1em;
  padding: 75px 0;
  verticle-align: middle;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2``;

const Landing = () => {
  // image hook state
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImage = async (image) => {
      const url = await storage.child(image).getDownloadURL();
      console.log(url);
      setImageUrls((imageUrls) => [...imageUrls, url]);
      console.log(imageUrls);
    };

    fetchImage("DSC07028.JPG");
    fetchImage("library.JPG");
    fetchImage("images/Fast Life.png");
  }, []);

  // react spring hook
  const calc = (o) => `translateY(${o * 0.1}px)`;
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
        <animated.div
          style={{
            transform: interpHeader,
            backgroundImage: `url(${Image})`,
            height: "100vh",
            objectFit: "cover",
            backgroundSize: "cover",
            alignContent: "center",
          }}
        >
          <TextContainer>
            <h2>Hello, I'm Thang Le</h2>
            <button> Click Here</button>
          </TextContainer>
        </animated.div>
        <animated.div
          style={{
            transform: interpHeader,
            backgroundImage: `url(${DSC})`,
            height: "100vh",
            objectFit: "cover",
            backgroundSize: "cover",
            alignContent: "center",
          }}
        >
          <TextContainer>
            <h2>Photography</h2>
            <button> Click Here</button>
          </TextContainer>
        </animated.div>

        {imageUrls.length > 0 &&
          imageUrls.map((url, id) => (
            <animated.div
              style={{
                transform: interpHeader,
                objectFit: "cover",
                backgroundSize: "cover",
                alignContent: "center",
                height: "100vh",
              }}
              key={id}
            >
              <img src={url}></img>
            </animated.div>
          ))}
      </animated.div>
    </Fragment>
  );
};

export default Landing;
