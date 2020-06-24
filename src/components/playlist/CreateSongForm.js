import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import './CreateSongForm.css'
// import { Card } from 'semantic-ui-react'

class CreateSongForm extends Component {
  state = {
    songName: "",
    url: "",
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  constructNewSong = (evt) => {
    evt.preventDefault();
    if (this.state.songName === "" || this.state.url === "") {
      window.alert("Please input a song name and a url");
    } else {
      this.setState({ loadingStatus: true });
      const songs = {
        name: this.state.songTitle,
        songs: this.state.songs,
        url: this.state.url,
        playlistId: this.state.playlistId
      };

      PlaylistManager.post(songs).then(() => this.props.history.push("/songs"));
    }
  };

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
              
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="playlistId"
                placeholder="Playlist"
              />
              <label htmlFor="url">URL</label>
              <label htmlFor="playlist">Playlist</label>
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
