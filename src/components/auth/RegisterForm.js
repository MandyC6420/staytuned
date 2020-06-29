import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./RegisterForm.css";

//sets state for register information
class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loadingStatus: false,
  };
  //not sure
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
   */
  //creates new user, sets state
  constructNewUser = (evt) => {
    evt.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      window.alert("Please input Email and Password");
    } else {
      this.setState({ loadingStatus: true });
      const users = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      };

      // Create the user and redirect user to ?????home
      PlaylistManager.add(users).then(() => this.props.history.push("/home"));
    }
  };
  //creates form
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
                id="userName"
                placeholder="First Name"
              />
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="lastName"
                placeholder="Last Name"
              />
              <label htmlFor="userName">Last name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email">Email</label>
              <input
                type="password"
                required
                onChange={this.handleFieldChange}
                id="password"
                placeholder="Password"
              />
              <label htmlFor="Password">Password</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewUser}
              >
                Register
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default RegisterForm;
