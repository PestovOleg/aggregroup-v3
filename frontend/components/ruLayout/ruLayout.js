import { Component, Fragment } from "react";
import Navbar from "../navbar/navbar";


class RuLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Navbar /* className="backgroundGreen" *//> {/* TODO: реализовать через redux */}
        {this.props.children}
      </Fragment>
    );
  }
}

export default RuLayout;
