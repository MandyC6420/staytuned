import React, { Component } from "react";



class SongCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Song name:{" "}
            <span className="card-songname">{this.props.song.songTitle}</span>
            <p>
              <span className="card-url">{this.props.song.url}</span>
            </p>
          </h3>
        </div>
        <button
          type="button"
          // disabled={this.state.loadingStatus}
          onClick={() => {
            this.props.deleteSongs(this.props.song.id);
            this.props.history.push(`/playlists/${this.props.playlistId}`)
          }}
        >
          Delete
        </button>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/songs/new");
            }}
          >
            Create New Song
          </button>
        </section>
      </div>
    );
  }
}

export default SongCard;
