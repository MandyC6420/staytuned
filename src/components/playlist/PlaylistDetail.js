import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./PlaylistDetail.css";
import { Link } from "react-router-dom";

class PlaylistDetail extends Component {
  state = {
    name: "",
    // breed: "",
  };

  componentDidMount() {
    console.log("PlaylistDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    PlaylistManager.get(this.props.playlistId).then((playlist) => {
      this.setState({
        name: playlist.playlistTitle,
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
          <h3>
            Name:{" "}
            <span style={{ color: "darkslategrey" }}>{this.state.playlistTitle}</span>
          </h3>
          
          {/* <p>Breed: {this.state.breed}</p> */}
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;
