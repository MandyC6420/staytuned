import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./PlaylistDetail.css";
// import { Link } from "react-router-dom";
import SongCard from "./SongCard";
// import { Card } from "semantic-ui-react";
class PlaylistDetail extends Component {
  state = {
    name: "",
    songs: [],
    loadingStatus: true,
  };

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

  componentDidMount() {
    console.log("PlaylistDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    PlaylistManager.get(this.props.playlistId).then((playlist) => {
      this.setState({
        name: playlist.playlistTitle,
        songs: playlist.songs,
        loadingStatus: false,
      });
    });
  }



  render() {
    console.log("PlaylistList: Render");
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture> */}
          
          <h3>Name:{this.state.name}</h3>

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
      </div>
    );
  }
}

export default PlaylistDetail;
