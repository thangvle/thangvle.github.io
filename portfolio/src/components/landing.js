import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Thang Le</h1>
              <hr />
              <p>Photographer | Video | Engineer</p>
            </div>
            <div className="social-link">
              {/*linkedin*/}
              <a
                href="http://google.com"
                rel="noopener no referrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*facebook*/}
              <a
                href="http://google.com"
                rel="noopener no referrer"
                target="_blank"
              >
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              {/*instagram*/}
              <a
                href="http://google.com"
                rel="noopener no referrer"
                target="_blank"
              >
                <i className="fa fa-instagram" />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
