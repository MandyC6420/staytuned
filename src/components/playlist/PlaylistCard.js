import React, { Component } from "react";
import { Link } from "react-router-dom";

class PlaylistCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <Link to={`/playlists/${this.props.playlists.id}`}>
            <button>Details</button>
          </Link>
          <h3>
            Playlist name:{" "}
            <span className="card-petname">
              {this.props.playlists.playlistTitle}
            </span>
          </h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default PlaylistCard;
