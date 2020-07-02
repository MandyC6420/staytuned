import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import { Image } from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
      <header>
        <h1 className="site-title">
          Stay Tuned!
          <br />
          <small></small>
          {/* <Image src='/images/staytunedlogoa1.jpg' fluid /> */}
        </h1>
        <nav>
          <ul className="container">
            <li>
              <Link className="nav-link" to="/home">
                Create a Playlist
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/playlists">
                Playlists
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/users/new">
                Register
              </Link>
            </li>
            <li>
              <Link 
              onClick={()=>localStorage.clear()}
              className="nav-link" to="/login">
                Logout
              </Link>
            </li>{" "}
            {/* <li></li>
            <li>Employees</li>
            <li>Owners</li> */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
