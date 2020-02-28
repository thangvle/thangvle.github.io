import React, { Component } from "react";
import { Tab, Tabs, Card, CardTitle, CardActions, Grid, Cell } from "react-mdl";

class Photography extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          <Card
            style={{
              minWidth: "600",
              margin: "auto",
              background:
                "url(https://images.unsplash.com/photo-1532289031496-d0162979f71f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover"
            }}
          ></Card>
          <br />
          <Card
            style={{
              minWidth: "600",
              margin: "1em",
              background:
                "url(https://images.unsplash.com/photo-1582585861644-d275d5c108e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
            }}
          ></Card>
          <br />
          <Card
            style={{
              minWidth: "600",
              margin: "1em",
              background:
                "url(https://images.unsplash.com/photo-1572288623190-5bb8b0d81aa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
            }}
          ></Card>
          <br />
          <Card
            style={{
              minWidth: "600",
              margin: "1em",
              background:
                "url(https://images.unsplash.com/photo-1582691498215-02d37eacce61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80) center/cover"
            }}
          ></Card>
          <br />
          <Card
            style={{
              minWidth: "600",
              margin: "1em",
              background:
                "url(https://images.unsplash.com/photo-1507292062805-f64f18a39c9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=919&q=80) center/cover"
            }}
          ></Card>
          <br />
          <Card
            style={{
              minWidth: "600",
              margin: "1em",
              background:
                "url(https://images.unsplash.com/photo-1510709657750-f5a80fc8da9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover"
            }}
          ></Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Card
            style={{
              minWidth: "1200",
              margin: "auto",
              background:
                "url(https://images.unsplash.com/photo-1582585861644-d275d5c108e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
            }}
          ></Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Landscape</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabID => this.setState({ activeTab: tabID })}
          ripple
        >
          <Tab>Portrait</Tab>
          <Tab>Street Photography</Tab>
          <Tab>Landscape</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Photography;
