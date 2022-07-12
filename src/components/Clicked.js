import React, { Component } from "react";

export class Clicked extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  UpdateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.UpdateCount}>Clicked button {count}</button>
      </div>
    );
  }
}

export default Clicked;
