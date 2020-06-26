import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";

class PlaylistEditForm extends Component {
  //set the initial state
  state = {
    playlistTitle: "",
    userId: "",
    loadingStatus: true,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  //doesn't work right yet nor do I know what it does?
  updateExistingPlaylist = (evt) => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedplaylist = {
      id: this.props.match.params.playlistId,
      playlistTitle: this.state.playlistTitle,
      userId: this.state.userId
    };

    PlaylistManager.update(editedplaylist).then(() =>
      this.props.history.push("/playlists")
    );
  };
// populates the input fields with the current values from the API
  componentDidMount() {
    PlaylistManager.get(this.props.match.params.playlistId).then(
      playlists => {
        this.setState({
          playlistTitle: playlists.playlistTitle,
          userId: playlists.userId,
          loadingStatus: false,
        });
      }
    );
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="playlistTitle"
                value={this.state.playlistTitle}
              />
              <label htmlFor="playlistName">Playlist name</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingPlaylist}
                className="btn btn-primary"
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

export default PlaylistEditForm;
