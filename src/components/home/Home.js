import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./CreatePlaylistForm.css";

class Home extends Component {
  state = {
    playlistTitle: "",
    userId: Number,
    loadingStatus: false,
  };
  // ??
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // it is the create new song ???
  constructNewPlaylist = (evt) => {
    evt.preventDefault();
    const playlists = {
      playlistTitle: this.state.playlistTitle,
      userId: this.props.userId
    };

    PlaylistManager.launch(playlists).then(() =>
      this.props.history.push(`/playlists`)
    );
  };
  render() {
    console.log(localStorage.getItem("userId"))
    return (
      <div>
        {/* <h1>We're in the home component</h1> */}
        <address>Stay Tuned! Compose your own Playlist!</address>
        <div>
          <form>
            <fieldset>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="playlistTitle"
                placeholder="Playlist Title"
              />
              <label htmlFor="playlistTitle"></label>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={this.state.loadingStatus}
                  onClick={this.constructNewPlaylist}
                >
                  Create New Playlist
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      // );
    );
  }
}

export default Home;
