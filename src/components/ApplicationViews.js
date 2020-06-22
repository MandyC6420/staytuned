import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import PlaylistList from "./playlist/PlaylistList";
import PlaylistCard from "./playlist/PlaylistCard";

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
          path="/playlists"
          render={(props) => {
            return <PlaylistList />;
          }}
        />

        <Route
          exact
          path="/playlists"
          render={(props) => {
            return <PlaylistCard />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
