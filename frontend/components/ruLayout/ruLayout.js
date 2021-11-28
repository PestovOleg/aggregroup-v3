import { Component, Fragment } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

class RuLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Navbar/> 
        {this.props.children}
        <Footer/>
      </Fragment>
    );
  }
}

export default RuLayout;
