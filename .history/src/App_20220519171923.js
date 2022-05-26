import { Component } from "react";

import "./App.css";
class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    console.log("super");
    this.state = {
      name: "Javaid",
      age: 30,
      profession: "Software Engineer",
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
        <div style={{ display: "flex" }}>
          <h1>{this.state.name}</h1>
          <h2>{this.state.age}</h2>
          <h2>{this.state.profession}</h2>
        </div>
        <h2>{this.state.address.city}</h2>
        <h2>{this.state.address.pincode}</h2>
      </div>
    );
  }
}

export default App;
