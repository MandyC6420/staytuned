import React, { Component } from "react";
import PlaylistManager from "../../modules/PlaylistManager";
import "./RegisterForm.css";
// import { SearchResults } from "semantic-ui-react";

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
    //playlist manager fetch call used
    PlaylistManager.getByEmail(this.state.email).then((users) => {
      console.log(users);
      //if the user types in nothing into inputs a window alert appears
      if (users.length === 0) {
        if (this.state.email === "" || this.state.password === "") {
          window.alert("Please input Email and Password");
        } else {
          //this sets state
          this.setState({ loadingStatus: true });
          const users = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
          };

          // Create the user and redirect user to ?????home
          PlaylistManager.add(users).then(() =>
            this.props.history.push("/home")
          );
        }
      } else {
        window.alert("This email is unavailable");
      }
    });
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
                id="firstName"
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
              <label htmlFor="lastName">Last name</label>
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
