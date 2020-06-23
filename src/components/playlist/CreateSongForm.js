import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
// import './CreateSongForm.css'

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
      window.alert("Please input an song name and a url");
    } else {
      this.setState({ loadingStatus: true });
      const songs = {
        name: this.state.songName,
        songs: this.state.songs,
      };

      // Create the animal and redirect user to animal list
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
                placeholder="Song name"
              />
              <label htmlFor="songName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="url"
                placeholder="URL"
              />
              <label htmlFor="url">URL</label>
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
