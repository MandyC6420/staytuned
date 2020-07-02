import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PlaylistCard.css";
import { Card, Button } from "semantic-ui-react";
//Icon, Image

//creates playlistcard, it links playlists to details
class PlaylistCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <Card>
            <Card.Content>
              <Card.Header>{this.props.playlists.playlistTitle}</Card.Header>
              <button
                type="button"
                onClick={() => {
                  this.props.history.push(
                    `/playlists/${this.props.playlists.id}/edit`
                  );
                }}
              >
                Edit
              </button>
              {/* <picture> */}
              {/* <img src={require('staytunedlogoa1.jpg')} alt="error" /> */}
              {/* </picture> */}
              <Card.Description>
                {/* <span className="date">{this.props.playlists.playlistTitle}</span> */}
              </Card.Description>
              <Link to={`/playlists/${this.props.playlists.id}`}>
                <Button>Details</Button>
              </Link>
              <h3>
                {/* Playlist name:{" "} */}
                <span className="card-playlist-name">
                  {/* {this.props.users.id} */}
                  {/* <button
                type="button"
                onClick={() =>
                  this.props.createform(this.props.user.id)
                }
              >
               Create New Playlist
              </button> */}
                  {/* not sure */}
                  {/* <button
                type="button"
                onClick={() => {
                  this.props.history.push(
                    `/playlists/${this.props.playlists.id}/edit`
                  );
                }}
              >
                Edit
              </button> */}
                </span>
              </h3>
              
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default PlaylistCard;
