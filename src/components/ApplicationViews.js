import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import PlaylistList from "./playlist/PlaylistList";
// import PlaylistCard from "./playlist/PlaylistCard";
import PlaylistDetail from "./playlist/PlaylistDetail"
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
<Route exact path="/playlist" render={(props) => {
  return <PlaylistList />
}} />
<Route path="/playlist/:playlistId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
  return <PlaylistDetail animalId={parseInt(props.match.params.playlistId)}/>
}} />

      </React.Fragment>
    );
  }
}

export default ApplicationViews;
