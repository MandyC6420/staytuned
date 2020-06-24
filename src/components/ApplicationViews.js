import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import PlaylistList from "./playlist/PlaylistList";
import PlaylistDetail from "./playlist/PlaylistDetail";
import CreateSongForm from "./playlist/CreateSongForm";
import Login from './auth/Login'
import { Redirect } from 'react-router';

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  render() {
    return (
      <React.Fragment>

<Route path="/login" component={Login} />

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
            if (this.isAuthenticated()) {
              return <PlaylistList {...props} />
          } else {
              return <Redirect to="/login" />
          }
      }}/>
            
   
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
