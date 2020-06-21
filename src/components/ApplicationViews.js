import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import PlaylistList from "./playlist/PlaylistList";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home />;
          }}
        />

        <Route
          exact
          path="/"
          render={(props) => {
            return <PlaylistList />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
