import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./PlaylistDetail.css";
// import { Link } from "react-router-dom";
import SongCard from "./SongCard";
// import { Card } from "semantic-ui-react";

//sets state??
class PlaylistDetail extends Component {
  state = {
    name: "",
    songs: [],
    loadingStatus: true,
  };
  //tells playlist manaer how to delete a song?
  deleteSongs = (id) => {
    this.setState({ loadingStatus: true });
    console.log("I'm in the delete function!");
    PlaylistManager.delete(id).then(() => {
      PlaylistManager.get(this.props.playlistId).then((playlist) => {
        this.setState({
          name: playlist.playlistTitle,
          songs: playlist.songs,
          loadingStatus: false,
        });
      });
      // PlaylistManager.getAll().then((newSongs) => {
      //   this.setState({
      //     songs: newSongs,
      //    });
    });
  };
  //I'm not sure what this does,
  componentDidMount() {
    console.log("PlaylistDetail: ComponentDidMount");
    //gets playlist id from manager?
    PlaylistManager.get(this.props.playlistId).then((playlist) => {
      this.setState({
        name: playlist.playlistTitle,
        songs: playlist.songs,
        artist: playlist.artist,
        loadingStatus: false,
      });
    });
  }
  //renders song card?
  render() {
    console.log("PlaylistList: Render");
    return (
      
        <div className="card">
          <div className="card-content">
            {/* <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture> */}
            {/* //puts song in state? */}
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push(`/songs/new/${this.props.playlistId}`);
              }}
            >
              Create New Song
            </button>
            <h3>Name:{this.state.songTitle}</h3>
            <div className="Song-Card-Container">
            {this.state.songs.map((song) => {
              return (
                <SongCard
                  key={song.id}
                  song={song}
                  deleteSongs={this.deleteSongs}
                  {...this.props}
                />
              );
            })}
          </div>
          {/* does this refresh back to the playlist with the new song */}
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;
