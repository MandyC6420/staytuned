import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./PlaylistDetail.css";
import { Link } from "react-router-dom";
import SongCard from "./SongCard";

class PlaylistDetail extends Component {
  state = {
    name: "",
    songs: [],
    // breed: "",
    loadingStatus: true,
  };

  deleteSongs = (id) => {
    PlaylistManager.delete(id).then(() => {
      PlaylistManager.getAll().then((newSongs) => {
        this.setState({
          songs: newSongs,
        });
      });
    });
  };

  componentDidMount() {
    console.log("PlaylistDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    PlaylistManager.get(this.props.playlistId).then((playlist) => {
      this.setState({
        name: playlist.playlistTitle,
        songs: playlist.songs,
        loadingStatus: false,
        // breed: animal.breed,
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture> */}
          <h3>Name:{this.state.name}</h3>
          {/* <p>{song.songTitle}</p> */}

          {/* <p>url: {this.state.playlists.url}</p> */}
          {this.state.songs.map((song) => {
            return(
            <SongCard
              key={song.id}
              song={song}
              deleteSongs={this.deleteSongs}
            />);
          })}
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
           
          </button>

          {/* <p>Breed: {this.state.breed}</p> */}
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;
