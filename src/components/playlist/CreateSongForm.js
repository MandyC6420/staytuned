import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./CreateSongForm.css";
// import { Card } from 'semantic-ui-react'
//sets state, sets playlist equal to the new data?
// Remember! State is the current values of the properties used to render a component
class CreateSongForm extends Component {
  state = {
    songName: "",
    url: "",
    artist: "",
    playlistId: Number,
    loadingStatus: false
  };
  // ??
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // it is the create new song ???
  constructNewSong = (evt) => {
    evt.preventDefault();
    if (this.state.songName === "" || this.state.url === "") {
      window.alert("Please input a song name and a url");
    } else {
      this.setState({ loadingStatus: true });
      const songs = {
        songTitle: this.state.songName,
        songs: this.state.songs,
        url: this.state.url,
        playlistId: this.props.playlistId,
        artist: this.state.artist
      };

      PlaylistManager.post(songs).then(() =>
        this.props.history.push(`/playlists/${this.props.playlistId}`)
      );
    }
  };
  // creates edit song form
  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="songName"
                placeholder="Song Title"
              />
              <label htmlFor="songTitle">Song Title</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="url"
                placeholder="URL"
              />
              <label htmlFor="url">URL</label>
              <label htmlFor="artistName">Artist Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="artist"
                placeholder="artist"
              />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewSong}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default CreateSongForm;
