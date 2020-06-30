// import React, { Component } from "react";
// import PlaylistManager from "../../modules/PlaylistManager";
// import "./CreatePlaylistForm.css";

// class CreatePlaylistForm extends Component {
//   state = {
//     songName: "",
//     url: "",
//     artist: "",
//     playlistId: Number,
//     loadingStatus: false,
//   };
//   // ??
//   handleFieldChange = (evt) => {
//     const stateToChange = {};
//     stateToChange[evt.target.id] = evt.target.value;
//     this.setState(stateToChange);
//   };

//   // it is the create new song ???
//   constructNewPlaylist = (evt) => {
//     evt.preventDefault();
//     const playlists = {
//       playlistId: this.props.playlistId,
//     };

//     PlaylistManager.post(playlists).then(() =>
//       this.props.history.push(`/playlists/${this.props.playlists}`)
//     );
//   };

//   // creates playlist form
//   render() {
//     return (
//       <div>
//         <form>
//           <fieldset>
//             <div className="alignRight">
//               <button
//                 type="button"
//                 disabled={this.state.loadingStatus}
//                 onClick={this.constructNewPlaylist}
//               >
//                 Submit
//               </button>
//             </div>
//           </fieldset>
//         </form>
//       </div>
//     );
//   }
// }

// export default CreatePlaylistForm;
