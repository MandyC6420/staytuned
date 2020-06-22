import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class PlaylistCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
           <h3>Playlist name: <span className="card-petname"></span></h3>
          <p></p>
        </div>
      </div>
    );
  }
}

// {this.props.playlists.playlistTitle}

{/* <h2>Name: <span className="card-petname">{this.props.animal.name}</span></h2>
          <p>Breed: {this.props.animal.breed}</p> */}

export default PlaylistCard;