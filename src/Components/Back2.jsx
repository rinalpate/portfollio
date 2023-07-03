import "./image2.css";
import React, { Component } from "react";

class Back2 extends Component {
  render() {
    return (
      <div className="back2">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
export default Back2;
