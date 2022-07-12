import { Component } from "react";

export class MouseHover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  UpdateCountOnMouseEnterd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.UpdateCountOnMouseEnterd}>
          MouseHover{count}
        </button>
      </div>
    );
  }
}

export default MouseHover;
