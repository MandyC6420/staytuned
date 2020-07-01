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
              <iframe
                width="200"
                height="275"
                src={this.props.song.url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {/* <span className="date">{this.props.song.url}</span> */}
            </Card.Description>

            <Card.Description>
              <h3>
                <span className="date">{this.props.song.artist}</span>
              </h3>
            </Card.Description>
            {/* </Card.Content> */}
            <Button
              // id="Button1"
              // type="button"
              // disabled={this.state.loadingStatus}
              //deletes songs from playlist and brings back the rest of the playlist
              onClick={() => {
                this.props.deleteSongs(this.props.song.id);
                // this.props.history.push(`/playlists/${this.props.playlistId}`);
                // this.props.artist(this.props.artist)
              }}
            >
              {/* <Button fluid>Delete</Button> */}
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
