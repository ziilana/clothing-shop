import React, { Component } from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/Directory";

export class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default Homepage;
