import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>HELLO REACT PROPS {this.props.name}</h1>
      </div>
    );
  }
}

export default ClassProps;
