import React, { Component } from "react"
import PlaylistManager from "../../modules/PlaylistManager"
// import "./AnimalForm.css"

class PlaylistEditForm extends Component {
    //set the initial state
    state = {
      playlistTitle: "",
    //   breed: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingPlaylist = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedplaylistTitle = {
        id: this.props.match.params.userId,
        name: this.state.playlistTitle,
        // breed: this.state.breed
      };

      PlaylistManager.update(editedplaylistTitle)
      .then(() => this.props.history.push("/playlists"))
    }

    componentDidMount() {
      PlaylistManager.get(this.props.match.params.playlistTitle)
      .then(playlists => {
          this.setState({
            playlistTitle: playlists.playlistTitle,
            // breed: animal.breed,
            loadingStatus: false,
          });
      });
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

              {/* <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              /> */}
              {/* <label htmlFor="breed">Breed</label> */}
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingPlaylistTitle}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default PlaylistEditForm