import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import "./SongCard.css";
//creates the song card
class SongCard extends Component {
  render() {
    return (
      <div className="card" id="card">
        {/* put card info here       */}

        <Card>
          {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
          <Card.Content>
            {/* pulls song title from json */}
            <Card.Header>{this.props.song.songTitle}</Card.Header>
            {/* pulls url from json */}
            <Card.Description>
              <span className="date">{this.props.song.url}</span>
            </Card.Description>

            <Card.Description>
            <span className="date">{this.props.song.artist}</span>
            </Card.Description>
          {/* </Card.Content> */}
          <Button
            id="Button1"
            type="button"
            // disabled={this.state.loadingStatus}
            //deletes songs from playlist and brings back the rest of the playlist
            onClick={() => {
              this.props.deleteSongs(this.props.song.id);
              this.props.history.push(`/playlists/${this.props.playlistId}`);
              // this.props.artist(this.props.artist)
            }}
          >
            
            Delete
          </Button>
          </Card.Content>
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
