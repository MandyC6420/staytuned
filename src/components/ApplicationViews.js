import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import PlaylistList from "./playlist/PlaylistList";
import PlaylistDetail from "./playlist/PlaylistDetail";
import CreateSongForm from "./playlist/CreateSongForm";
import Login from "./auth/Login";
import { Redirect } from "react-router";
import PlaylistEditForm from "./playlist/PlaylistEditForm";

// logs in user?????I don't know what else
class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
{/* routes user home */}
        <Route
          exact
          path="/home"
          render={(props) => {
            return <Home />;
          }}
        />
{/* gets playlist id for the playlist edit form? */}
        <Route
          path="/playlists/:playlistId(\d+)/edit"
          render={(props) => {
            return <PlaylistEditForm {...props} />;
          }}
        />
{/* this is the authentication feature, redirects user to login when playlist is */}
        <Route
          exact
          path="/playlists"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <PlaylistList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/playlists/:playlistId(\d+)"
          render={(props) => {
            // Pass the playlistId to the ??playlist detail
            return (
              <PlaylistDetail
                playlistId={parseInt(props.match.params.playlistId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/songs/new/:playlistId(\d+)"
          render={(props) => {
            return (
              <CreateSongForm
                playlistId={parseInt(props.match.params.playlistId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/songs/:songId(\d+)"
          render={(props) => {
            // not sure what this does
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
