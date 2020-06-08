import React from "react";
import PropTypes from "prop-types";

import "./landingxd.css";

class LandingXD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        data-layer="271e1a12-cf59-4d05-b019-02b407a29fbe"
        className="landing"
      >
        {" "}
        <div
          data-layer="11938bca-b497-403b-970e-f24be6cdeea3"
          className="songNghien"
        ></div>
        <div
          data-layer="b49422b9-8616-42b3-94a5-027c7e21b4af"
          className="rectangle1"
        ></div>
        <div data-layer="da69dfb5-de6b-47c4-a8c2-9ebf768083fd" className="logo">
          LOGO
        </div>
        <div
          data-layer="847a7749-cd28-4fb0-bfd6-c8b9d761d77e"
          className="about"
        >
          About
          <br />
        </div>
        <div
          data-layer="5d716c35-9721-442f-ac2f-8c7efe1149d4"
          className="photography"
        >
          Photography
        </div>
        <div
          data-layer="6f027c52-1a3d-4003-a603-117d98c9983c"
          className="video"
        >
          Video{" "}
        </div>
        <div
          data-layer="3df3708d-e485-4d1b-ab48-ba0bd901a176"
          className="contact"
        >
          Contact
        </div>
        <div
          data-layer="4e2ad28f-23e0-49f3-ad2e-1f5b2cf3bf7f"
          className="group1"
        >
          {" "}
          <div
            data-layer="bc65e05f-bec6-4160-81d4-075a55a3485b"
            className="rectangle2"
          ></div>
          <div
            data-layer="7a9235a8-4ae7-4342-9050-cfab691984b8"
            className="explore"
          >
            Explore
          </div>
        </div>
      </div>
    );
  }
}

LandingXD.propTypes = {};

LandingXD.defaultProps = {};

export default LandingXD;
