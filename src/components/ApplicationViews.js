import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import PlaylistList from "./playlist/PlaylistList";
import PlaylistDetail from "./playlist/PlaylistDetail";
import CreateSongForm from "./playlist/CreateSongForm";

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
            return <PlaylistList {...props} />;
          }}
        />

          <Route
          exact
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
        <Route
          path="/songs/new"
          render={(props) => {
            return <CreateSongForm {...props} />;
          }}
        />
        <Route
          path="/songs/:songId(\d+)"
          render={(props) => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <PlaylistDetail
                songId={parseInt(props.match.params.songId)}
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
