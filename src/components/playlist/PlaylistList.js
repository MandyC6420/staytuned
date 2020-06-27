import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";
import PlaylistManager from "../../modules/PlaylistManager";
import "./../playlist/PlaylistCard";

class PlaylistList extends Component {
  // sets state
  state = {
    playlists: [],
    artist: "",
  };
// not sure, but gets playlists from PlaylistManager
  componentDidMount() {
    console.log("PLAYLIST LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    console.log(localStorage.getItem("credentials"))
    PlaylistManager.getAll().then((playlists) => {
      this.setState({
        playlists: playlists,
        artist: ""
      });
      console.log(playlists);
    });
  }
//deletes individual song by it's id?
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
    console.log(this.state.playlists);

    return (
      <div className="container-cards">
        {/* sets playlists into state */}
        {this.state.playlists.map((playlist) =>
        // playlist card ??
          <PlaylistCard
            key={playlist.userid}
            playlists={playlist}
            deletePlaylist={this.deletePlaylist}
            {...this.props}

            
          />
          
        )}
      </div>
    );
  }
}

export default PlaylistList;
