import React, { Component } from "react";
import { Card } from 'semantic-ui-react'



class SongCard extends Component {
  render() {
    return (
      <div className="card">
        {/* <Card
    href='#card-example-link-card'
    header='Use Me'
    meta='https://www.youtube.com/watch?v=EZldnP0lhHA'
    description='By:  Bill Withers'
    
  /> */}
        <div className="card-content">
          <h3>
            Song name:{" "}
            <span className="card-songname">{this.props.song.songTitle}</span>
            <p>
              <span className="card-url">{this.props.song.url}</span>
            </p>
          </h3>
        </div>
        {/* <button
          type="button"
          // disabled={this.state.loadingStatus}
          onClick={() => {
            this.props.deleteSongs(this.props.song.id);
            this.props.history.push(`/playlists/${this.props.playlistId}`)
          }}
        >
          Delete
        </button> */}
        <section className="section-content">
          
        </section>
      </div>
    );
  }
}

export default SongCard;
