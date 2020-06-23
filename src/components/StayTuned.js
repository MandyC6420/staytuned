import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews"
import NavBar from "../components/nav/NavBar";

class StayTuned extends Component {
    
  render() {
      return (
      <>
        <NavBar />
        <ApplicationViews />
      </>

    );
  }
}

export default StayTuned;

