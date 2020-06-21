import React, { Component } from 'react'
//import the components we will need
import PlaylistCard from './PlaylistCard'
import PlaylistManager from '../../modules/PlaylistManager'

class PlaylistList extends Component {
    //define what this component needs to render
    state = {
        playlists: [],
    }

componentDidMount(){
    console.log("PLAYLIST LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    PlaylistManager.getAll()
    .then((playlists) => {
        this.setState({
            playlist: playlists
        })
    })
}

render(){
    console.log("PlaylistList: Render");
  
    return(
      <div className="container-cards">
        {this.state.playlists.map(playlist =>
          <PlaylistCard key={playlist.id} playlists={playlist} />
        )}
      </div>
    )
  }
}

export default PlaylistList