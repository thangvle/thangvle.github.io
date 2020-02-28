import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

import Main from "./components/main";

function App() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <Layout>
        <Header transparent title="Telefoto" style={{ color: "Black" }}>
          <Navigation>
            <Link style={{ color: "black" }} to="/aboutme">
              About Me
            </Link>
            <Link style={{ color: "black" }} to="/photography">
              Photography
            </Link>
            <Link style={{ color: "black" }} to="/video">
              Video
            </Link>
            <Link style={{ color: "black" }} to="/contact">
              Contact Me
            </Link>
          </Navigation>
        </Header>
        <Drawer title="Telefoto" style={{ color: "black" }}>
          <Navigation>
            <Link style={{ color: "black" }} to="/aboutme">
              About Me
            </Link>
            <Link style={{ color: "black" }} to="/photography">
              Photography
            </Link>
            <Link style={{ color: "black" }} to="/video">
              Video
            </Link>
            <Link style={{ color: "black" }} to="/contact">
              Contact Me
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
