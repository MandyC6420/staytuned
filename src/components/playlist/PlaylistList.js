import React, { Component } from "react";
//import the components we will need
import PlaylistCard from "./PlaylistCard";
import PlaylistManager from "../../modules/PlaylistManager";
import "./../playlist/PlaylistCard";
// import CreateSongForm from './playlist/CreateSongForm'

class PlaylistList extends Component {
  //define what this component needs to render
  state = {
    playlists: [],
  };

  componentDidMount() {
    console.log("PLAYLIST LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    PlaylistManager.getAll().then((playlists) => {
      this.setState({
        playlists: playlists,
      });
      console.log(playlists);
    });
  }

  deleteSong = (id) => {
    PlaylistManager.delete(id).then(() => {
      PlaylistManager.getAll().then((newSongs) => {
        this.setState({
          songs: newSongs,
        });
      });
    });
  };

  render() {
    console.log("PlaylistList: Render");

    return (
      <div className="container-cards">
        {this.state.playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            playlists={playlist}
            deletePlaylist={this.deletePlaylist}
          />
        ))}
      </div>
    );
  }
}

export default PlaylistList;
