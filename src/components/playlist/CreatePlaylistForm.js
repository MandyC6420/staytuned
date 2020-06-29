import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./CreatePlaylistForm.css";

class CreatePlaylistForm extends Component {
    state = {
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
        const users = {
          playlistId: this.props.playlistId,
          
        };
  
        PlaylistManager.post(users).then(() =>
          this.props.history.push(`/users/${this.props.user}`)
        );
      }
    
    // creates playlist form
    render() {
      return (
        <div>
            <form>
            <fieldset>
            <div className="alignRight">
                <button
                  type="button"
                  disabled={this.state.loadingStatus}
                  onClick={this.constructNewPlaylist}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
          </div>
        
      );
    }
}

  
  
  export default CreatePlaylistForm;