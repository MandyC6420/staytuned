import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import PlaylistList from "./playlist/PlaylistList";
// import PlaylistCard from "./playlist/PlaylistCard";
import PlaylistDetail from "./playlist/PlaylistDetail";
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

        {/* Make sure you add the `exact` attribute here */}
        <Route
          path="/playlists/:playlistId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <PlaylistDetail
                playlistId={parseInt(props.match.params.playlistId)}
                {...props}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
