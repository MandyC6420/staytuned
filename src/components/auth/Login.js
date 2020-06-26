import React, { Component } from "react"
import PlaylistManager from "../../modules/PlaylistManager"

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
// I have no idea
  handleLogin = (e) => {
    e.preventDefault()
  //  calls PlaylistManager to get user by email, password, and id
    PlaylistManager.getByEmail(this.state.email)
    .then((users) => {
      console.log(users)
      if(users[0] === undefined ) {
        window.alert("User not found!")
        console.log(users[0])
      }
      else{
        localStorage.setItem("userId", users[0].id)
        localStorage.setItem(
          "credentials",
          JSON.stringify({
              email: this.state.email,
              password: this.state.password,
              // id:users[0].id
          })
      )

    // localStorage.setItem(
    //     "credentials",
    //     JSON.stringify({
    //         email: this.state.email,
    //         password: this.state.password
    //     })
    // )
    // I don't know
    this.props.history.push("/playlists");

  }})}
// renders login form
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
                Sign in
            </button>
        </fieldset>
      </form>
    )
  }}



export default Login