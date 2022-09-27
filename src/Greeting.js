import React, { Component } from "react";
class Greeting extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {

    return(
      <>
         <input value={this.state.text} onChange={this.handleChange} />
         
      </>
    )
    
  }
}
export default Greeting; 