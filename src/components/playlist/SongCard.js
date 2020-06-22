import React, { Component } from "react";
import { Link } from "react-router-dom";

class SongCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Song name:{" "}
            <span className="card-petname">{this.props.song.songTitle}</span>
          </h3>
          <button
            type="button"
            // disabled={this.state.loadingStatus}
            onClick={this.props.song.deleteSongs}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default SongCard;
