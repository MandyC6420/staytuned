import React, { Component } from "react";
import { Link } from "react-router-dom";
import './PlaylistCard.css'



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
            <span className="card-playlist-name">
              {this.props.playlists.playlistTitle}
              {/* <button
                type="button"
                onClick={() =>
                  this.props.deletesong(this.props.songs.id)
                }
              >
               Delete Song
              </button> */}
            </span>
          </h3>
          {/* <p></p> */}
        </div>
      </div>
    );
  }
}

export default PlaylistCard;
