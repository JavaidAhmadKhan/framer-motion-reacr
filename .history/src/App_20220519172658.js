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
        <table>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              gap: "20px",
            }}
          >
            <h1>{this.state.name}</h1>
            <h2>{this.state.age}</h2>
            <h2>{this.state.profession}</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "green",
              margin: "10px",
              padding: "10px",
              color: "white",
            }}
          >
            <h2>{this.state.address.city}</h2>
            <h2>{this.state.address.pincode}</h2>
          </div>
        </table>
      </div>
    );
  }
}

export default App;
