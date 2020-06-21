import React, { Component } from 'react';

class PlaylistCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3>Playlist name: <span className="card-petname">Playlist Name</span></h3>
          <p></p>
        </div>
      </div>
    );
  }
}

export default PlaylistCard;