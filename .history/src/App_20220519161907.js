import { Component } from "react";

import "./App.css";
class App extends Component {
  constructor() {
    // console.log("constructor");
    super();
    // console.log("supper");
    this.state = {
      name: "Javaid",
      age: 30,
      address: {
        city: "Srinagar",
        pincode: "190001",
      },
    };
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <p>{this.state.address.pincode}</p>
      </div>
    );
  }
}

export default App;
