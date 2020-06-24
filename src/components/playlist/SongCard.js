import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

class SongCard extends Component {
  render() {
    return (
      <div className="card">
        {/* put card info here       */}

        <Card>
          {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
          <Card.Content>
            <Card.Header>{this.props.song.songTitle}</Card.Header>
            <Card.Description>
              <span className="date">{this.props.song.url}</span>
            </Card.Description>
          </Card.Content>
          <Button
            id="Button"
            type="button"
            // disabled={this.state.loadingStatus}
            onClick={() => {
              this.props.deleteSongs(this.props.song.id);
              this.props.history.push(`/playlists/${this.props.playlistId}`);
            }}
          >
            
            Delete
          </Button>
        </Card>

        <div className="card-content">
          <h3>
            {/* Song name:{" "} */}
            {/* <span className="card-songname">{this.props.song.songTitle}</span> */}
            {/* <p>
              <span className="card-url">{this.props.song.url}</span>
            </p> */}
          </h3>
        </div>
        <section className="section-content"></section>
      </div>
    );
  }
}

export default SongCard;
